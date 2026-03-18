const BasePage = require('../basepages/BasePage');
const { getBaseURL, config } = require('../config');

class CommonActions extends BasePage {
  constructor(page) {
    super(page);
  }

async openURL(envKey = null) {
  const baseURL = envKey
    ? config[envKey].baseURL
    : getBaseURL();

    try {
      await super.goto(baseURL);
      await super.waitForPageToLoad();
      this.logger.info(`[START_TEST] | Opened URL: ${baseURL}`);
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to open: ${baseURL} | ${error}`);
      throw error;
    } 
  }
}

module.exports = CommonActions;
