const BasePage = require('../../basepages/BasePage');
const POM_demoMainPage = require('../../pageobject/saucedemo_pom/pom.sauce_MainPage');  

class SauceDemoMainActions extends BasePage {
  constructor(page) {
    super(page);
    this.POM_demoMainPage = new POM_demoMainPage(); // initialize pom.DemoMainPage.js elements
  }
  
    async _verifyMainPageTitle() {
    this.logger.info("[START] | _verifyMainPage()");
    try {
      if (await this.waitUntilElementVisible(this.POM_demoMainPage.main_page_title)) {
        await this.verifyElementTextEquals(this.POM_demoMainPage.main_page_title, "Swag Labs"); 
      }
    } catch (error) {
      this.logger.error(`[ERROR] | Failed to verify main page: ${error}`);
      throw error;
    }
    this.logger.info("[END] | _verifyMainPage()");
  }

}

module.exports = SauceDemoMainActions;