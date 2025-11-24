const BasePage = require('../BasePage/BasePage');
const HomePage = require('../pageobject/pom.HomePage');

class HomeActions extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new HomePage();
  }

  async isLoggedIn() {
    return this.page.locator(this.locators.profileMenu).isVisible();
  }

  async logout() {
    await this.clickElement(this.locators.profileMenu);
    await this.clickElement(this.locators.logoutBtn);
  }
}

module.exports = HomeActions;
