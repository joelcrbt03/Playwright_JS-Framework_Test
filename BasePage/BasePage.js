import { expect } from '@playwright/test';
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
  }

  /* 
  ----------------------------------------                   
            TEXT ACTIONS                  
  ---------------------------------------- 
                                        */
  async enterText(locator, text) {
    await this.page.locator(locator).fill(text);
  }
  async getText(locator) {
    return this.page.locator(locator).innerText();
  }
  async verifyTextContains(locator, text) {
    return locator.includes(text);
  }

  /* 
  ----------------------------------------                   
            WAIT FOR ELEMENTS                    
  ---------------------------------------- 
                                        */
  async waitForElementToBeVisible(locator, timeoutInSeconds = 30) {
    const element = this.page.locator(locator);
    try {
      await expect(element).toBeVisible({ timeout: timeoutInSeconds * 1000 });
      this.logger.info(`[PASS] Element "${locator}" is visible!`);
    } catch (error) {
      this.logger.error(`[FAIL] Element "${locator}" not visible!`);
      throw error;
    }
  }

  async waitForElementToBeInvisible(locator, timeoutInSeconds = 30) {
    const element = this.page.locator(locator);
    try {
      await expect(element).toBeHidden({ timeout: timeoutInSeconds * 1000 });
      this.logger.info(`[PASS] Element "${locator}" not visible!`);
    } catch (error) {
      this.logger.error(`[FAIL] Element "${locator}" is visible!`);
      throw error;
    }
  }
}

module.exports = BasePage;
