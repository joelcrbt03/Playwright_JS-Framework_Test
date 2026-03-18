const BasePage = require('../../basepages/BasePage');
const POM_demoLoginPage = require('../../pageobject/saucedemo_pom/pom.sauce_LoginPage');

class SauceDemoLoginActions extends BasePage {
  constructor(page) {
    super(page);
    this.POM_demoLoginPage = new POM_demoLoginPage(); // initialize pom.DemoLoginPage.js elements
  }

  async _loginToApp({ username, password }) {
    this.logger.info("[START] | _loginToApp()");
    try {
      await this.enterText(this.POM_demoLoginPage.username_field, username);
      await this.enterText(this.POM_demoLoginPage.password_field, password);
      if (await this.waitUntilElementVisible(this.POM_demoLoginPage.submit_button)) {
        await this.clickElement(this.POM_demoLoginPage.submit_button);
      }
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to login: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _loginToApp()");
  }

}

module.exports = SauceDemoLoginActions;
