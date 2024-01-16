const { test, expect } = require('@playwright/test');
const { TIMEOUT } = require('dns');

test('Browser In Incognito Mode', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://google.com/');
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle("Google");

    await context.close();
}
);