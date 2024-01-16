const { test, expect } = require('@playwright/test');
const { error } = require('console');

test('Adactin Title Assertion @reg', async ({ page }) => {
    await page.goto("https://adactinhotelapp.com/");
    // await page.screenshot({ path: 'Screenshots/pic1.png' });  //screenshot code
    // await page.screenshot({ path: 'Screenshots/pic1.png', fullPage: true });   //screenshot code ---> full page
    // await page.screenshot({ path: 'Screenshots/pic1_' + Date.now() + '.png' });   //Screenshot with time stamp
    // await page.screenshot({ path: 'Screenshots/pic1_' + Date.now() + '.png', fullPage: true });

    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
    await page.locator('id=username').fill('SAral');
    await page.locator('id=password').fill('1234');
    await page.locator('id=login').click();
    const err = await (await page.locator('//div[@class="auth_error"]//b').textContent()).trim();
    expect(err).toBe('Invalid Login details or Your Password might have expired. Click here to reset your password');
}
);



