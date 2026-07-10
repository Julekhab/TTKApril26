const { expect } = require('@playwright/test');
const { BasePage } = require('../../pages/BasePage');

class SauceCheckoutOverviewPage extends BasePage {
  constructor(page) {
    super(page);
    this.finishButton = page.locator('[data-test="finish"]');
  }

  overviewItem(productName) {
    return this.page.locator('[data-test="inventory-item"]').filter({
      has: this.page.getByText(productName, { exact: true }),
    });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/checkout-step-two\.html/);
    await expect(this.page.getByText('Checkout: Overview')).toBeVisible();
  }

  async expectProductDetails(product) {
    const overviewItem = this.overviewItem(product.name);

    await expect(overviewItem.getByText(product.name, { exact: true })).toBeVisible();
    await expect(overviewItem.getByText(product.description)).toBeVisible();
    await expect(overviewItem.getByText(product.price)).toBeVisible();
  }

  async finish() {
    await this.click(this.finishButton);
  }
}

module.exports = { SauceCheckoutOverviewPage };
