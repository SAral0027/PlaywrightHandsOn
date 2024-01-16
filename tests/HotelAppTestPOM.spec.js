const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { SearchHotelPage } = require('../Pages/SearchHotelPage');
// test.describe.configure({ mode: 'serial' })
let page;
test.beforeAll('Before All', async ({ browser }) => {
    page = await browser.newPage();
})

test('Login', async () => {
    const name = "SAral1996";
    const pwd = "SAral@7200";

    const lp = new LoginPage(page);
    await lp.launchURL();
    await lp.login(name, pwd);
})

test('Search Hotel', async () => {
    const nameCity = "Adelaide";
    const nameHotel = "Hotel Sunshine";
    const typeRoom = "Deluxe";
    const nosRoom = "2 - Two";

    const shp = new SearchHotelPage(page);
    shp.searchHotel(nameCity,nameHotel,typeRoom,nosRoom);
})

