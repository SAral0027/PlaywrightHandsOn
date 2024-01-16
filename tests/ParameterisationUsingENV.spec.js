const { test, expect } = require('@playwright/test');
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});

//code for env in terminal
test(`Test with ${process.env.LOGIN}`, async ({ page }) => {
    console.log(process.env.LOGIN, process.env.PASSWORD);
    console.log(process.env.WEB_URL);
    await page.goto('https://adactinhotelapp.com/');
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
    await page.locator('id=username').fill(process.env.LOGIN);
    await page.locator('id=password').fill(process.env.PASSWORD);
    await page.locator('id=login').click();
})