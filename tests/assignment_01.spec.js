import {test, expect } from "@playwright/test";
import { beforeEach } from "node:test";
test('crate a new account', async({page})=>{
    await page.goto('https://qa.taltektc.com/index.html');
    await page.getByRole('link',{name:'Create New Account'}).click();
    await expect(page).toHaveURL('https://qa.taltektc.com/signup.html');
    await page.getByRole('textbox',{name:'First Name'}).fill('Julekha');
    await page.getByRole('textbox',{name:'Last Name'}).fill('begum');
    await page.getByRole('textbox',{name:'Your Email'}).fill('abcd@gmail.com');
    await page.locator('//input[@name="password"]').fill('abcd12');
    await page.getByRole('textbox',{name:'Confirm Password'}).fill('abcd12');
    await page.locator('//select[@name="month"]').selectOption('Jul');
    await page.locator('//select[@name="day"]').selectOption('14');
    await page.locator('//select[@name="year"]').selectOption('2000');
    await page.getByRole('radio',{name:'Female'}).click();
    //await page.getByRole('checkbox',{name:'By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use'});
    await page.locator('#defaultCheck1').click();
    await page.getByRole('button', {name:'Create my account'}).click();
    //await page.locator('.swal-text').getByText('Your student ID is: TTC0078');
})

 test.beforeEach('verify new account created', async({page})=>{
    await page.goto('https://qa.taltektc.com/home.html');
    await page.getByRole('textbox', {name:'Email address or Student ID'}).fill('abcd@gmail.com');
    await page.getByRole('textbox', {name:'Password'}).fill('abcd12');
    await page.getByRole('button',{name:'Log In'}).click();
    await expect(page).toHaveURL('https://qa.taltektc.com/home.html');
   // await page.locator('//p[@id="studentId"]').click();
    })

  test('verify web table',async ({page})=>{
    await page.locator('//a[@href="users-table.html"]').click();
    await expect (page.getByRole('cell',{name:'abcd@gmail.com'})).toBeVisible();
  })    