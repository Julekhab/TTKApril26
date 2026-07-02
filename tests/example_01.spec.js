// import { test, expect} from '@playwright';

// test('verify the title of the login page', async ({page}) => {
//      await page.goto ('https://qa.taltektc.com/');
//      await expect(page).toHaveTitle('Login');

// })

import { test, expect } from '@playwright/test'

test('Verify the title of login page', async ({ page }) => {
    await page.goto('https://qa.taltektc.com/');
    await expect(page).toHaveTitle('Login');
})