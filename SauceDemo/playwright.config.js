const { defineConfig, devices } = require('@playwright/test');

/** Playwright configuration for the Sauce Demo test suite. */
module.exports = defineConfig({
  testDir: './tests',
  testMatch: /saucedemo_.*\.spec\.js/,
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
