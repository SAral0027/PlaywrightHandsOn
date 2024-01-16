import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('Kumar');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('Kumar');
  await page.getByTestId('royal_login_button').click();
  await expect(page.locator('#loginform')).toContainText('The password that you\'ve entered is incorrect. Forgotten password?');
});