const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class FileUploadPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://demo.automationtesting.in/FileUpload.html';
    this.fileInput = page.getByRole('button', { name: 'Choose File' });
  }

  async open() {
    await this.goto(this.url);
  }

  async upload(filePath) {
    await this.uploadFile(this.fileInput, filePath);
  }

  async expectUploadedFile(fileName) {
    await expect(
      this.page.locator('.file-footer-caption', { hasText: fileName }).first()
    ).toBeVisible();
  }
}

module.exports = { FileUploadPage };
