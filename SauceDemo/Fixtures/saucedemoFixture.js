const { test: base, expect } = require('@playwright/test');
const {
  SauceLoginPage,
  SauceProductsPage,
  SauceCartPage,
  SauceCheckoutInfoPage,
  SauceCheckoutOverviewPage,
  SauceCheckoutCompletePage,
} = require('../pages');

const test = base.extend({
  sauceLoginPage: async ({ page }, use) => {
    await use(new SauceLoginPage(page));
  },

  sauceProductsPage: async ({ page }, use) => {
    await use(new SauceProductsPage(page));
  },

  sauceCartPage: async ({ page }, use) => {
    await use(new SauceCartPage(page));
  },

  sauceCheckoutInfoPage: async ({ page }, use) => {
    await use(new SauceCheckoutInfoPage(page));
  },

  sauceCheckoutOverviewPage: async ({ page }, use) => {
    await use(new SauceCheckoutOverviewPage(page));
  },

  sauceCheckoutCompletePage: async ({ page }, use) => {
    await use(new SauceCheckoutCompletePage(page));
  },
});

module.exports = { test, expect };
