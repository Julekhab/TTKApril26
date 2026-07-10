const { expect } = require('@playwright/test');

class SauceDemoCartPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.checkoutButton = page.getByTestId('checkout');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async removeBackpack() {
    await this.page.getByTestId('remove-sauce-labs-backpack').click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { SauceDemoCartPage };
