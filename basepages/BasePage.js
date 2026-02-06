const { expect } = require("@playwright/test");
const logger = require("../utils/logger");

class BasePage {
  constructor(page) {
    this.page = page;
    this.logger = logger;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  /* 
  ----------------------------------------                   
          BASIC ELEMENT ACTIONS                  
  ---------------------------------------- 
                                        */
  async clickElement(locator) {
    this.logger.info(`[CLICK] | Element "${locator}"`);
    return await this.page.locator(locator).click();
  }
  async doubleClickElement(locator) {
    this.logger.info(`[DOUBLE_CLICK] | Element "${locator}"`);
    return await this.page.locator(locator).dblclick();
  }
  async pressKeyOnElement(locator, key) {
    this.logger.info(`[ELEMENT + KEY] | '${locator}' + '${key}'`);
    return await this.page.press(locator, key)
  }
  async pressKeyboard(key) {
    this.logger.info(`[KEYBOARD] | '${key}'`);
    return await this.page.keyboard.press(key)
  }

  /* 
  ----------------------------------------                   
            TEXT ACTIONS                  
  ---------------------------------------- 
                                        */
  async enterText(locator, text) {
    await this.page.focus(locator)
    await this.page.locator(locator).fill(text);
    this.logger.info(`[INPUT] | '${text}'`);
  }
  async getText(locator) {
    const text = await this.page.locator(locator).innerText();
    return text;
  }

  /* 
  ----------------------------------------                   
      ELEMENT VISIBILITY VALIDATIONS
      - returns true/false                   
  ---------------------------------------- 
                                        */
  async isElementVisible(locator) {
    const element = this.page.locator(locator);
    const isVisible = await element.isVisible();
    if (isVisible) {
      this.logger.info(`[PASS] | Element "${locator}" is Visible!`);
      return true;
    } else {
      this.logger.warn(`[FAIL] | Element "${locator}" is Hidden!`);
      return false;
    }
  }
  async isElementNotVisible(locator) {
    const element = this.page.locator(locator);
    const isHidden = await element.isHidden();
    if (isHidden) {
      this.logger.info(`[PASS] | Element "${locator}" is Hidden!`);
      return true;
    } else {
      this.logger.warn(`[FAIL] | Element "${locator}" is still Visible!`);
      return false;
    }
  }

  /* 
  ----------------------------------------                   
            ELEMENT ASSERTIONS                    
  ---------------------------------------- 
                                        */
  async verifyElementTextContains(locator, expectedText) {
    const element = this.page.locator(locator);
    try {
      const actualText = await this.getText(locator);
      await expect(element).toContainText(expectedText);
      this.logger.info(`[PASS] | Expected text "${expectedText}" found in element "${locator}"! Actual text: "${actualText}"`);
    } catch (error) {
      this.logger.error(`[FAIL] | Expected text NOT found!\nExpected Text: "${expectedText}" \nActual text: "${actualText}" \nReason: ${error}`);
      throw error;
    }
  }

  /* 
  ----------------------------------------                   
            WAIT METHODS                    
  ---------------------------------------- 
                                        */
  async waitUntilElementVisible(locator, timeoutInSeconds = 5) {
    const element = this.page.locator(locator);
    try {
      await expect(element).toBeVisible({ timeout: timeoutInSeconds * 1000 });
      this.logger.info(`[PASS] | Wait Until Element "${locator}" is visible!`);
      return true;
    } catch (error) {
      this.logger.error(`[FAIL] | Wait Until Element "${locator}" not visible!`);
      throw error;
    }
  }
  async waitUntilElementNotVisible(locator, timeoutInSeconds = 5) {
    const element = this.page.locator(locator);
    try {
      await expect(element).toBeHidden({ timeout: timeoutInSeconds * 1000 });
      this.logger.info(`[PASS] | Wait Until Element "${locator}" is Invisible!`);
      return true;
    } catch (error) {
      this.logger.error(`[FAIL] | Wait Until Element "${locator}" is visible!`);
      throw error;
    }
  }
  async waitForPageToLoad(timeout = 30000) {
    await this.page.waitForLoadState('domcontentloaded', { timeout });
    this.logger.info(`[TEST_INFO] | Page loaded!`);
  }
  async sleep(timeout = 1) {
    this.logger.info(`[SLEEP] | Waiting until ${timeout}s ...`)
    return await this.page.waitForTimeout(timeout * 1000)
  }


}
module.exports = BasePage;
