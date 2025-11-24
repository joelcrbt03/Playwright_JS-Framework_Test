const BasePage = require('../BasePage/BasePage');

class CommonActions extends BasePage {
  constructor(page) {
    super(page);
  }

  async openURL(url) {
    await super.goto(url); // internally uses BasePage.goto
    return await this.page.waitForLoadState('domcontentloaded') // wait until DOM is ready
  }
}

module.exports = CommonActions;
