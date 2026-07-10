// const fs = require('fs/promises');
// const path = require('path');
// const { test } = require('@playwright/test');
// const { LoginPage } = require('../../pages');
// const { USERS } = require('../../test-data/users');
// const { STORAGE_STATE } = require('../../test-data/paths');

// async function saveStorageState(browser, user, storagePath) {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   const loginPage = new LoginPage(page);

//   await loginPage.loginSuccessfully(user.email, user.password);
//   await fs.mkdir(path.dirname(storagePath), { recursive: true });
//   await context.storageState({ path: storagePath });
//   await context.close();
// }

// test('create storage states', async ({ browser }) => {
//   await saveStorageState(browser, USERS.admin, STORAGE_STATE.admin);
//   await saveStorageState(browser, USERS.user, STORAGE_STATE.user);
// });
