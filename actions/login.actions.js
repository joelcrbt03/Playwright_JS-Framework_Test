const BasePage = require('../BasePage/BasePage');
const POM_LOGINPAGE = require('../pageobject/pom.LoginPage');

class LoginActions extends BasePage {
  constructor(page) {
    super(page);
    this.POM_LOGIN = new POM_LOGINPAGE(); // initialize pom.LoginPage.js elements
  }

  async loginToApp({ username, password }) {
    await this.enterText(this.POM_LOGIN.username, username);
    await this.enterText(this.POM_LOGIN.password, password);
    if (await this.waitUntilElementVisible(this.POM_LOGIN.submit)) {
      await this.clickElement(this.POM_LOGIN.submit);
    } else {
      this.logger.info("[FAIL] No Submit Button!");
    }
  }

  async verifySuccessLogin(text) {
    if (await this.waitUntilElementNotVisible(this.POM_LOGIN.submit)) {
      if (await this.isElementVisible(this.POM_LOGIN.success)) {
        await this.verifyElementTextContains(this.POM_LOGIN.success, text);
      }
      await this.sleep(10)
      this.logger.info("[TEST_INFO] | SUCESS LOGIN!!!");
    }
  }

  async logoutToApp() {
    await this.clickElement(this.POM_LOGIN.logoutBtn);
  }

  async getErrorMessage() {
    return await this.getText(this.POM_LOGIN.error);
  }
}

module.exports = LoginActions;
