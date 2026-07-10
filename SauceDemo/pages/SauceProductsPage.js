const { expect } = require('@playwright/test');
const { BasePage } = require('../../pages/BasePage');

class SauceProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  productCard(productName) {
    return this.page.locator('[data-test="inventory-item"]').filter({
      has: this.page.getByText(productName, { exact: true }),
    });
  }

  productAddButton(productName) {
    return this.productCard(productName).getByRole('button', { name: 'Add to cart' });
  }

  productRemoveButton(productName) {
    return this.productCard(productName).getByRole('button', { name: 'Remove' });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.getByText('Products')).toBeVisible();
  }

  async expectProductDetails(product) {
    const productCard = this.productCard(product.name);

    await expect(productCard.getByText(product.name, { exact: true })).toBeVisible();
    await expect(productCard.getByText(product.description)).toBeVisible();
    await expect(productCard.getByText(product.price)).toBeVisible();
    await expect(productCard.locator('img')).toBeVisible();
  }

  async addProduct(productName) {
    await this.click(this.productAddButton(productName));
  }

  async removeProduct(productName) {
    await this.click(this.productRemoveButton(productName));
  }

  async expectCartCount(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async expectNoCartCount() {
    await expect(this.cartBadge).toHaveCount(0);
  }

  async openCart() {
    await this.click(this.cartLink);
  }
}

module.exports = { SauceProductsPage };
