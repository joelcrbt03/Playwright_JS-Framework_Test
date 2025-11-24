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

    /// TO DO: INSERT CONDITIONS
    await this.waitForElementToBeVisible(this.POM_LOGIN.submit)
    await this.clickElement(this.POM_LOGIN.submit);
    this.logger.info("TEST LANG")
    await this.waitForElementToBeInvisible(this.POM_LOGIN.submit)

    // to fail the test using custom timeout //
    // await this.waitForElementToBeVisible(this.POM_LOGIN.submit, 10);
  }

  async verifyLogin() {
    const text = await this.getText(this.POM_LOGIN.success)
    await this.verifyTextContains(text, "success")
  }

  async logoutToApp() {
    await this.clickElement(this.POM_LOGIN.logoutBtn);
  }

  async getErrorMessage() {
    return await this.getText(this.POM_LOGIN.error);
  }
}

module.exports = LoginActions;
