const { test, expect } = require('@playwright/test');

test('Shadow DOM', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/shadowdom1/');
//    console.log(await page.locator('div.target1').textContent());
//    console.log(await page.locator('div.target2').textContent());
//    console.log(await page.locator('div.target3').textContent());
//    console.log(await page.locator('div.target1').first().textContent());
//    console.log(await page.locator('div.target1').nth(1).textContent());
//    console.log(await page.locator('div.target1').last().textContent());
//    const no = await page.locator('div.target1').count();  //find no of shadow elements

console.log(await page.locator(':light(div.target1)').textContent());  //auto fetch of light element along with shadow ele


})