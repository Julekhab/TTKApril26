const { expect } = require('@playwright/test');

class SauceDemoInventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByTestId('title');
    this.backpack = page.getByTestId('item-4-title-link');
    this.bikeLight = page.getByTestId('item-0-title-link');
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  async expectLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  }

  async addBikeLightToCart() {
    await this.page.getByTestId('add-to-cart-sauce-labs-bike-light').click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { SauceDemoInventoryPage };
