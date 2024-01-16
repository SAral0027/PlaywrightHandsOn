class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('id=username');
        this.password = page.locator('id=password');
        this.loginBtn = page.locator('#login');
    }

    async launchURL() {
        await this.page.goto("https://adactinhotelapp.com/")
    }

    async login(userName, pass) {
        await this.username.type(userName);
        await this.password.type(pass);
        await this.loginBtn.click();
    }
}

module.exports = {LoginPage}