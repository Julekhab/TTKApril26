const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class DropDownPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://qa.taltektc.com/drop-down.html';
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(this.url);
  }
}

module.exports = { DropDownPage };
