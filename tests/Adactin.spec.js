const { test, expect } = require('@playwright/test');

test('Adactin Login Assertion @reg', async ({ page }) => {
    //login page
    await page.goto("https://adactinhotelapp.com/");
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
    await page.locator('id=username').fill('SAral1996');
    await page.locator('id=password').fill('SAral@7200');
    await page.locator('id=login').click();
    const msg = await (await page.locator('//input[@id="username_show"]').getAttribute('value'));
    expect(msg).toBe('Hello SAral1996!');
    console.log("Success Message is : " + msg);

    //search hotel page
    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption({ index: 1 });
    await page.locator('//select[@id="room_type"]').selectOption({ label: 'Standard' });
    await page.locator('//select[@id="room_nos"]').selectOption('2');
    await page.locator('//input[@id="Submit"]').click();

    //select hotel page
    await expect(page).toHaveTitle("Adactin.com - Select Hotel");
    // await page.locator('//input[@id="radiobutton_0"]').click();
    await page.check("//input[@id='radiobutton_0']");
    // await expect(page.locator("//input[@id='radiobutton_0']")).toBeChecked(); ---> positive checking
    expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeTruthy();
    //expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeFalsy(); ---> negative checking
    await page.locator('//input[@id="continue"]').click();

    //book hotel page
    await expect(page).toHaveTitle("Adactin.com - Book A Hotel");
    await page.locator('//input[@id="first_name"]').fill('SAral');
    await page.locator('//input[@id="last_name"]').fill('Kumar');
    await page.locator('//textarea[@id="address"]').fill('Chennai');
    await page.locator('//input[@id="cc_num"]').fill('2345789012343456');
    await page.locator('//select[@id="cc_type"]').selectOption('AMEX');
    await page.locator('//select[@id="cc_exp_month"]').selectOption({ index: 2 });
    await page.locator('//select[@id="cc_exp_year"]').selectOption({ label: '2025' });
    await page.locator('//input[@id="cc_cvv"]').fill('123');
    await page.locator('//input[@id="book_now"]').click();

    //generate orderId
    const orderId = await page.locator('//input[@id="order_no"]').getAttribute('value');
    console.log("The Order Id is : " + orderId);
    await page.locator('//a[text()="Booked Itinerary"]').click();

    //cancel booking
    // await page.locator('(//input[@type="checkbox"])[2]').click();
    await page.click("(//input[@type='checkbox'])[2]");
    await page.check("(//input[@type='checkbox'])[3]");
    await page.uncheck("(//input[@type='checkbox'])[3]");

    expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeTruthy();
    expect(await page.locator("(//input[@type='checkbox'])[3]").isChecked()).toBeFalsy();

}
);