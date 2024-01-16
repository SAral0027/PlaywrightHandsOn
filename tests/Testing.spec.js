const { test, expect } = require('@playwright/test');    //importing @playwright/test folder

test('Google Title Assertion', async ({ page }) => {
    await page.goto("http://google.com");
    await expect(page).toHaveTitle("Google");    //await used only with nasync
}
)