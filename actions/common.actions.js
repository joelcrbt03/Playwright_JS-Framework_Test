const BasePage = require('../basepages/BasePage');
const { getBaseURL } = require('../config');

class CommonActions extends BasePage {
  constructor(page) {
    super(page);
  }

  async openURL() {
    const baseURL = getBaseURL();

    try {
      await super.goto(baseURL);            // Uses BasePage navigation
      await super.waitForPageToLoad();      // Ensures DOM readiness
      this.logger.info(`[START_TEST] | Opened URL: ${baseURL}`);
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to open: ${(baseURL)} | ${error}`);
      throw error;
    }
  }
}

module.exports = CommonActions;
