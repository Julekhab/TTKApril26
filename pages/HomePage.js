const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://qa.taltektc.com/home.html';
    this.dropDownLink = page.getByRole('link', { name: /Drop down/i });
    this.dragDropLink = page.locator('//a[@href="drag-drop.html"]');
    this.alertLink = page.locator('[href="alert.html"]');
    this.iframeLink = page.locator('//a[@href="iframe.html"]');
    this.sliderLink = page.locator('//a[@href="slider.html"]');
    this.windowsLink = page.locator('//a[@href="switching-windows.html"]');
    this.rightClickLink = page.locator('//a[@href="right-click-action.html"]');
    this.scrollLink = page.locator('//a[@href="scrolling-up-down.html"]');
    this.usersTableLink = page.locator('//a[@href="users-table.html"]');
  }

  async open() {
    await this.goto(this.url);
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(this.url);
  }

  async goToDropDownPage() {
    await this.click(this.dropDownLink);
  }

  async goToDragDropPage() {
    await this.click(this.dragDropLink);
  }

  async goToAlertPage() {
    await this.click(this.alertLink);
  }

  async goToIframePage() {
    await this.click(this.iframeLink);
  }

  async goToSliderPage() {
    await this.click(this.sliderLink);
  }

  async goToWindowsPage() {
    await this.click(this.windowsLink);
  }

  async goToRightClickPage() {
    await this.click(this.rightClickLink);
  }

  async goToScrollPage() {
    await this.click(this.scrollLink);
  }

  async goToUsersTablePage() {
    await this.click(this.usersTableLink);
  }
}

module.exports = { HomePage };
