const BasePage = require('../basepages/BasePage');
const { getBaseURL, config } = require('../config');

class CommonActions extends BasePage {
  constructor(page) {
    super(page);
  }

/**
 * Opens a URL in the browser.
 *
 * This method is designed to be flexible and scalable:
 * - By default, it uses the ENV-based URL from config.js
 * - Optionally, you can override the URL by passing a specific environment key
 *
 * @param {string|null} [envKey=null] - Optional environment key (e.g., 'TestURL02')
 *                                     If provided, it overrides the default ENV
 *                                     and opens the corresponding URL from config.
 *
 * @example
 * // Uses default ENV (e.g., TestURL01)
 * await common.openURL();
 *
 * @example
 * // Overrides and opens SauceDemo
 * await common.openURL('TestURL02');
 *
 * @throws {Error} Throws error if navigation fails or invalid envKey is provided
 */
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
