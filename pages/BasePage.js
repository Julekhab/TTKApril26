class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url, options = {}) {
    await this.page.goto(url, options);
  }

  async waitForPageReady() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async click(locator) {
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }

  async select(locator, value) {
    await locator.selectOption(value);
  }

  async uploadFile(locator, filePath) {
    await locator.setInputFiles(filePath);
  }

  async takeScreenshot(path) {
    await this.page.screenshot({ path, fullPage: true });
  }
}

module.exports = { BasePage };
