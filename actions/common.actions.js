const BasePage = require('../BasePage/BasePage');

class CommonActions extends BasePage {
  constructor(page) {
    super(page);
  }

  async openURL(url) {
    try {
      await super.goto(url);                  // Uses BasePage navigation
      await super.waitForPageToLoad();         // Ensures DOM readiness
      this.logger.info(`[TEST_INFO] Opened URL: ${url}`);
    } catch (error) {
      this.logger.error(`[ERROR] Failed to open: ${url} | ${error}`);
      throw error;
    }
  }
}

module.exports = CommonActions;
