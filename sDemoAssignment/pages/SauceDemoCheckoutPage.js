const { expect } = require('@playwright/test');

class SauceDemoCheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postalCodeInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');
    this.backHomeButton = page.getByTestId('back-to-products');
    this.completeHeader = page.getByTestId('complete-header');
  }

  async enterCustomerInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async expectOverview() {
    await expect(this.page.getByTestId('title')).toHaveText('Checkout: Overview');
    await expect(this.page.getByTestId('subtotal-label')).toBeVisible();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async expectOrderComplete() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }

  async returnToProducts() {
    await this.backHomeButton.click();
  }
}

module.exports = { SauceDemoCheckoutPage };
