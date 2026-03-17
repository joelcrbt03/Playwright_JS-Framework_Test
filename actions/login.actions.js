const BasePage = require('../basepages/BasePage');
const POM_LOGINPAGE = require('../pageobject/pom.LoginPage');

class LoginActions extends BasePage {
  constructor(page) {
    super(page);
    this.POM_LOGIN = new POM_LOGINPAGE(); // initialize pom.LoginPage.js elements
  }

  // LOGIN TO APP ACTION
  async _loginToApp({ username, password }) {
    this.logger.info("[START] | _loginToApp()");
    try {
      await this.enterText(this.POM_LOGIN.username, username);
      await this.enterText(this.POM_LOGIN.password, password);
      if (await this.waitUntilElementVisible(this.POM_LOGIN.submit)) {
        await this.clickElement(this.POM_LOGIN.submit);
      }
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to login: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _loginToApp()");
  }

  // VERIFY SUCCESS LOGIN ACTION
  async _verifySuccessLogin(text) {
    this.logger.info("[START] | _verifySuccessLogin()");
    try {
      if (await this.isElementNotVisible(this.POM_LOGIN.submit)) {
        if (await this.waitUntilElementVisible(this.POM_LOGIN.successText)) {
          await this.verifyElementTextContains(this.POM_LOGIN.successText, text);
          this.logger.info("[TEST_INFO] | Testing sleep function...");
          await this.sleep(10);
          this.logger.info("[TEST_INFO] | SUCCESS LOGIN!!!");
        }
      }
    } catch (error) {
      this.logger.error(`[ERROR] | Login verification failed: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _verifySuccessLogin()");
  }

  // LOGOUT TO APP ACTION
  async _logoutToApp() {
    this.logger.info("[START] | _logoutToApp()");
    try {
      await this.clickElement(this.POM_LOGIN.logoutBtn);
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to logout: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _logoutToApp()");
  }

  // GET ERROR MESSAGE ACTION
  async _getErrorMessage() {
    this.logger.info("[START] | _getErrorMessage()");
    try {
      await this.getText(this.POM_LOGIN.error);
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to get error message: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _getErrorMessage()");
  }

}

module.exports = LoginActions;
