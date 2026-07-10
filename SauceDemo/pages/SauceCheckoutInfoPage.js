const { expect } = require('@playwright/test');
const { BasePage } = require('../../pages/BasePage');

class SauceCheckoutInfoPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/checkout-step-one\.html/);
    await expect(this.page.getByText('Checkout: Your Information')).toBeVisible();
  }

  async fillCustomerInfo(customer) {
    await this.fill(this.firstNameInput, customer.firstName);
    await this.fill(this.lastNameInput, customer.lastName);
    await this.fill(this.postalCodeInput, customer.postalCode);
  }

  async continue() {
    await this.click(this.continueButton);
  }
}

module.exports = { SauceCheckoutInfoPage };
