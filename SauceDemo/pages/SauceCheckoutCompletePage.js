const { expect } = require('@playwright/test');
const { BasePage } = require('../../pages/BasePage');

class SauceCheckoutCompletePage extends BasePage {
  constructor(page) {
    super(page);
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/checkout-complete\.html/);
    await expect(this.page.getByText('Checkout: Complete!')).toBeVisible();
  }

  async expectDoneMessage() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
    await expect(
      this.page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    ).toBeVisible();
  }

  async backHome() {
    await this.click(this.backHomeButton);
  }
}

module.exports = { SauceCheckoutCompletePage };
