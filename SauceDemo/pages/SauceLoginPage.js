const { expect } = require('@playwright/test');
const { BasePage } = require('../../pages/BasePage');

class SauceLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://www.saucedemo.com/';
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async open() {
    await this.goto(this.url);
  }

  async login(username, password) {
    await this.open();
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async loginSuccessfully(username, password) {
    await this.login(username, password);
    await expect(this.page).toHaveURL(/inventory\.html/);
  }
}

module.exports = { SauceLoginPage };
