const fs = require('fs/promises');
const path = require('path');
const { test: base, expect } = require('@playwright/test');
const {
  LoginPage,
  HomePage,
  FileUploadPage,
  DropDownPage,
} = require('../pages');
const { USERS } = require('../test-data/users');
const { STORAGE_STATE } = require('../test-data/paths');

const HOME_URL = 'https://qa.taltektc.com/home.html';

async function storageExists(storagePath) {
  try {
    await fs.access(storagePath);
    return true;
  } catch {
    return false;
  }
}

async function createAuthenticatedContext(browser, user, storagePath) {
  const contextOptions = (await storageExists(storagePath))
    ? { storageState: storagePath }
    : {};
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  if (contextOptions.storageState) {
    await page.goto(HOME_URL);
  }

  const loginIsVisible = await page
    .getByRole('button', { name: 'Log In' })
    .isVisible({ timeout: 2000 })
    .catch(() => false);

  if (!contextOptions.storageState || loginIsVisible) {
    const loginPage = new LoginPage(page);
    await loginPage.loginSuccessfully(user.email, user.password);
    await fs.mkdir(path.dirname(storagePath), { recursive: true });
    await context.storageState({ path: storagePath });
  }

  return { context, page };
}

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  fileUploadPage: async ({ page }, use) => {
    await use(new FileUploadPage(page));
  },

  dropDownPage: async ({ page }, use) => {
    await use(new DropDownPage(page));
  },

  adminPage: async ({ browser }, use) => {
    const { context, page } = await createAuthenticatedContext(
      browser,
      USERS.admin,
      STORAGE_STATE.admin
    );
    await use(page);
    await context.close();
  },

  userPage: async ({ browser }, use) => {
    const { context, page } = await createAuthenticatedContext(
      browser,
      USERS.user,
      STORAGE_STATE.user
    );
    await use(page);
    await context.close();
  },

  adminHomePage: async ({ adminPage }, use) => {
    await use(new HomePage(adminPage));
  },

  adminDropDownPage: async ({ adminPage }, use) => {
    await use(new DropDownPage(adminPage));
  },
});

module.exports = { test, expect, USERS, STORAGE_STATE };
