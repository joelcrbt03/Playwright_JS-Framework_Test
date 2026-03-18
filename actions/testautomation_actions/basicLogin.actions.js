const BasePage = require('../../basepages/BasePage');
const POM_BASICLOGINPAGE = require('../../pageobject/testautomation_pom/pom.basicLoginPage');

class LoginActions extends BasePage {
  constructor(page) {
    super(page);
    this.POM_BASICLOGINPAGE = new POM_BASICLOGINPAGE(); // initialize pom.basicLoginPage.js elements
  }

  // START --- LOGIN & LOGOUT ACTION
  async _loginToApp({ username, password }) {
    this.logger.info("[START] | _loginToApp()");
    try {
      await this.enterText(this.POM_BASICLOGINPAGE.username_field, username);
      await this.enterText(this.POM_BASICLOGINPAGE.password_field, password);
      if (await this.waitUntilElementVisible(this.POM_BASICLOGINPAGE.submit_button)) {
        await this.clickElement(this.POM_BASICLOGINPAGE.submit_button);
      }
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to login: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _loginToApp()");
  }

  async _logoutToApp() {
    this.logger.info("[START] | _logoutToApp()");
    try {
      await this.clickElement(this.POM_BASICLOGINPAGE.logout_button);
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to logout: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _logoutToApp()");
  }
  // END --- LOGIN & LOGOUT ACTION

  // VERIFY SUCCESS LOGIN ACTION
  async _verifySuccessLogin(text) {
    this.logger.info("[START] | _verifySuccessLogin()");
    try {
      if (await this.isElementNotVisible(this.POM_BASICLOGINPAGE.submit_button)) {
        if (await this.waitUntilElementVisible(this.POM_BASICLOGINPAGE.success_text)) {
          await this.verifyElementTextContains(this.POM_BASICLOGINPAGE.success_text, text);
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

  // VERIFY UNSUCCESSFUL LOGIN ACTION (Invalid Username)
  async _verifyNegativeUsername() {
    this.logger.info("[START] | _verifyNegativeUsername()");
    try {
      if (await this.waitUntilElementVisible(this.POM_BASICLOGINPAGE.error_text)) {
        if (await this.isElementVisible(this.POM_BASICLOGINPAGE.error_text)) {
          await this.verifyElementTextContains(this.POM_BASICLOGINPAGE.error_text, "invalid");
          if (await this._getErrorMessage() === "Your username is invalid!") {
            this.logger.info("[TEST_INFO] | UNSUCCESSFUL LOGIN (Username invalid)");
          } else {
            this.logger.warn("[FAIL] | Unexpected error message received.");
          }
        }
      }
    } catch (error) {
      this.logger.error(`[ERROR] | Unsuccessful login verification failed: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _verifyNegativeUsername()");
  }

  // VERIFY UNSUCCESSFUL LOGIN ACTION (Invalid Password)
  async _verifyNegativePassword() {
    this.logger.info("[START] | _verifyNegativePassword()");
    try {
      if (await this.waitUntilElementVisible(this.POM_BASICLOGINPAGE.error_text)) {
        if (await this.isElementVisible(this.POM_BASICLOGINPAGE.error_text)) {
          await this.verifyElementTextContains(this.POM_BASICLOGINPAGE.error_text, "invalid");
          if (await this._getErrorMessage() === "Your password is invalid!") {
            this.logger.info("[TEST_INFO] | UNSUCCESSFUL LOGIN (Password invalid)");
          } else {
            this.logger.warn("[FAIL] | Unexpected error message received.");
          }
        }
      }
    } catch (error) {
      this.logger.error(`[ERROR] | Unsuccessful login verification failed: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _verifyNegativePassword()");
  }

  // GET ERROR MESSAGE ACTION
  async _getErrorMessage() {
    this.logger.info("[START] | _getErrorMessage()");
    let text;
    try {
      text = await this.getText(this.POM_BASICLOGINPAGE.error_text);
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to get error message: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _getErrorMessage()");
    return text;
  }
}

module.exports = LoginActions;
