import {test, expect } from '@playwright/test';

test ('login test basic',async ({page}) =>{
    await page.goto('https://qa.taltektc.com/index.html');
    await page.getByRole('textbox', {name:'Email address or Student ID'}).fill('tempdata');
    await page.getByRole('textbox', {name:'Password'}).fill('tempdata');
    await page.getByRole('button', {name:'Log In'}).click();
   // await expect(page.getByText('Invalid student ID')).toBeVisible();
    await expect(page.getByRole('paragraph')).toContainText('Invalid student ID');
})

test ('invalid login test for css', async ({page})=>{
    await page.goto('https://qa.taltektc.com/index.html');
    await page.getByRole('textbox', {name:'Email address or Student ID'}).fill('tempdata');
    await page.getByRole('textbox', {name:'Password'}).fill('tempdata');
    await page.getByRole('button', {name:'Log In'}).click();
     // await expect(page.getByText('Invalid student ID')).toBeVisible();
    // id: #
    // class: .
    // for other: [attribute="value"]
    await expect(page.locator('#error-msg')).toHaveText('Invalid student ID');

})

test ('invalid login for Xpath', async ({page})=>{
    await page.goto('https://qa.taltektc.com/index.html');
    await page.getByRole('textbox', {name:'Email address or Student ID'}).fill('tempdata');
    await page.getByRole('textbox', {name:'Password'}).fill('tempdata');
    await page.getByRole('button', {name:'Log In'}).click();
        // xpath
    // tag[@attri="value"]
    await expect(page.locator('//p[@id="error-msg"]')).toBeVisible();

})