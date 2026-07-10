const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://qa.taltektc.com/index.html';
    this.homeUrl = 'https://qa.taltektc.com/home.html';
    this.emailInput = page.getByRole('textbox', { name: 'Email address or Student ID' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.createAccountLink = page.getByRole('link', { name: 'Create New Account' });
    this.errorMessage = page.locator('#error-msg');
  }

  async open() {
    await this.goto(this.url);
  }

  async login(email, password) {
    await this.open();
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async loginSuccessfully(email, password) {
    await this.login(email, password);
    await this.page.waitForURL(this.homeUrl);
  }

  async expectInvalidLoginMessage(message = 'Invalid student ID') {
    await expect(this.errorMessage).toHaveText(message);
  }

  async goToCreateAccount() {
    await this.click(this.createAccountLink);
  }
}

module.exports = { LoginPage };
