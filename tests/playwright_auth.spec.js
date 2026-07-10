import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});


// test('going to drop down page', async ({ page }) => {
//   await page.goto('https://qa.taltektc.com/index.html');
//  // await page.locator(' //a[@href="drop-down.html"]').click();

//  if (await page.getByRole('button', { name: 'Log In' }).isVisible()) {
//     await page.getByRole('textbox', { name: 'Email address or Student ID' }).fill('abcd@gmail.com');
//     await page.getByRole('textbox', { name: 'Password' }).fill('abcd12');
//     await page.getByRole('button', { name: 'Log In' }).click();
//   }

//   await expect(page).toHaveURL('https://qa.taltektc.com/home.html');
//   await page.getByRole('link', { name: /Drop down/i }).click();
//  await expect(page).toHaveURL('https://qa.taltektc.com/drop-down.html');
// });


// import { test, expect } from '@playwright/test';

// test.use({
//   storageState: 'playwright/.auth/user.json'
// });


test('Going to drop down page', async ({ page }) => {
    await page.goto('https://qa.taltektc.com/index.html');
    await page.locator('//a[@href="drag-drop.html"]').click();
});