import {test, expect} from '@playwright/test';

test('File upload', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles('ss1.png');
    await expect(page.getByRole('StaticText',{name:'ss1.png'}));
    
})