class SearchHotelPage {

    constructor(page) {
        this.page = page;
        this.city = page.locator('//select[@id="location"]');
        this.hotel = page.locator('//select[@id="hotels"]');
        this.rType = page.locator('//select[@id="room_type"]');
        this.rNos = page.locator('//select[@id="room_nos"]');
        this.submitBtn = page.locator('//input[@id="Submit"]');
    }

    async searchHotel(cityName,hotelName,roomType,roomNos){
        await this.city.selectOption(cityName);
        await this.hotel.selectOption(hotelName);
        await this.rType.selectOption(roomType);
        await this.rNos.selectOption(roomNos);
        await this.submitBtn.click();
    }
}

module.exports={SearchHotelPage}