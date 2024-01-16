import { test, expect } from '@playwright/test';

// generate code record ---> npx playwright codegen url

test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await page.locator('#username').click();
  await page.locator('#username').fill('SAral1996');
  await page.locator('#password').click();
  await page.locator('#password').fill('SAral@7200');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#username_show')).toBeVisible();
});