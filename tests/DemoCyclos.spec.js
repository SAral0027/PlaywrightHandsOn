const { test, expect } = require('@playwright/test');

test('DemoCyclos Example', async ({ page }) => {
    await page.goto('https://demo.cyclos.org/ui/dashboard');
    await expect(page).toHaveTitle('Home - Cyclos');
    await page.locator('//div[text()=" Login "]').click();
    await page.locator('//input[@type="text"]').fill('demo');
    await page.locator('//input[@type="password"]').fill('1234');
    await page.locator('//span[text()="Submit"]').click();

})