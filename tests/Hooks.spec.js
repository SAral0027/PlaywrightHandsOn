const { test, expect } = require('@playwright/test');

test.beforeEach('Hooks', async ({ page }) => {
    await page.goto("https://adactinhotelapp.com/");
}
)

test('Login', async ({ page }) => {
    await page.locator('id=username').fill('SAral1996');
    await page.locator('id=password').fill('SAral@7200');
    await page.locator('id=login').click();
})

test('Search Hotel', async ({ page }) => {
    await page.locator('id=username').fill('SAral1996');
    await page.locator('id=password').fill('SAral@7200');
    await page.locator('id=login').click();
    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption({ index: 1 });
    await page.locator('//select[@id="room_type"]').selectOption({ label: 'Standard' });
    await page.locator('//select[@id="room_nos"]').selectOption('2');
    await page.locator('//input[@id="Submit"]').click();
})

test.afterEach('After Each', async ({ page }) => {
    console.log('Finished ${testInfo.title} with Status ${testInfo.status}');
})

test.beforeAll('Before All', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
})

test.afterAll('After All', async ({ browser }) => {
    await browser.close();
})