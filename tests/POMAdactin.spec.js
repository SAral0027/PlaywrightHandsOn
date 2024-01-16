const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../Pages/LoginPage')

test('POM', async ({ page }) => {
    const name = "SAral1996";
    const pwd = "SAral@7200";

    const lp = new LoginPage(page);
    await lp.launchURL();
    await lp.login(name, pwd);
})