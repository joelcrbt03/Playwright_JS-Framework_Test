import { expect, selectors } from '@playwright/test';
const logger = require('../utils/logger.js');

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
    await this.page.locator(locator).click();
    this.logger.info(`[CLICK] | Element "${locator}" clicked!`);
  }
  async keyPress(locator, key) {
    this.logger.info(`[KEY] | "${key}"`);
    return await this.page.press(locator, key)
  }

  /* 
  ----------------------------------------                   
            TEXT ACTIONS                  
  ---------------------------------------- 
                                        */
  async enterText(locator, text) {
    await this.page.focus(locator)
    await this.keyPress(locator, 'Control+A')
    await this.keyPress(locator, 'Backspace')
    await this.page.locator(locator).fill(text);
    this.logger.info(`[INPUT] | "${text}"`);
  }
  async getText(locator) {
    const text = await this.page.locator(locator).innerText();
    return text;
  }
  async verifyElementTextContains(locator, expectedText) {
    const element = this.page.locator(locator);
    try {
      await expect(element).toContainText(expectedText);
      this.logger.info(`[PASS] | Expected text "${expectedText}" found in element "${locator}"!\nActual text: "${await this.getText(locator)}"`);
    } catch (error) {
      this.logger.warn(`[FAIL] | Expected text NOT found!\nExpected Text: "${expectedText}" \nActual text: "${await this.getText(locator)}"`);
      throw error;
    }
  }

  /* 
  ----------------------------------------                   
            VERIFY ELEMENTS                    
  ---------------------------------------- 
                                        */
  async verifyElementVisible(locator, timeoutInSeconds = 30) {
    const element = this.page.locator(locator);
    try {
      await expect(element).toBeVisible({ timeout: timeoutInSeconds * 1000 });
      this.logger.info(`[PASS] | Element "${locator}" is visible!`);
      return true;
    } catch (error) {
      this.logger.error(`[FAIL] | Element "${locator}" not visible!`);
      throw error;
    }
  }
  async verifyElementInvisible(locator, timeoutInSeconds = 30) {
    const element = this.page.locator(locator);
    try {
      await expect(element).toBeHidden({ timeout: timeoutInSeconds * 1000 });
      this.logger.info(`[PASS] | Element "${locator}" not visible!`);
      return true;
    } catch (error) {
      this.logger.error(`[FAIL] | Element "${locator}" is visible!`);
      throw error;
    }
  }
}

module.exports = BasePage;
