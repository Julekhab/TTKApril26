const { test: base, expect } = require('@playwright/test');
const {
  SauceDemoLoginPage,
  SauceDemoInventoryPage,
  SauceDemoCartPage,
  SauceDemoCheckoutPage,
} = require('./pages');

const test = base.extend({
  sauceDemoLoginPage: async ({ page }, use) => {
    await use(new SauceDemoLoginPage(page));
  },
  sauceDemoInventoryPage: async ({ page }, use) => {
    await use(new SauceDemoInventoryPage(page));
  },
  sauceDemoCartPage: async ({ page }, use) => {
    await use(new SauceDemoCartPage(page));
  },
  sauceDemoCheckoutPage: async ({ page }, use) => {
    await use(new SauceDemoCheckoutPage(page));
  },
});

module.exports = { test, expect };
