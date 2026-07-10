const { expect } = require('@playwright/test');
const { BasePage } = require('../../pages/BasePage');

class SauceCartPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  cartItem(productName) {
    return this.page.locator('[data-test="inventory-item"]').filter({
      has: this.page.getByText(productName, { exact: true }),
    });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/cart\.html/);
    await expect(this.page.getByText('Your Cart')).toBeVisible();
  }

  async expectProductDetails(product) {
    const cartItem = this.cartItem(product.name);

    await expect(cartItem.getByText(product.name, { exact: true })).toBeVisible();
    await expect(cartItem.getByText(product.description)).toBeVisible();
    await expect(cartItem.getByText(product.price)).toBeVisible();
  }

  async checkout() {
    await this.click(this.checkoutButton);
  }
}

module.exports = { SauceCartPage };
