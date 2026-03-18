const { test: fixture } = require("@playwright/test");

const CommonActions = require("../actions/common.actions");
const BasicLoginActions = require("../actions/testautomation_actions/basicLogin.actions");
const HomeActions = require("../actions/home.actions");

const SauceDemoLoginActions = require("../actions/saucedemo_actions/saucedemo_login.actions");

const test = fixture.extend({
  common: async ({ page }, use) => {
    await use(new CommonActions(page));
  },
  basicLogin: async ({ page }, use) => {
    await use(new BasicLoginActions(page));
  },
  home: async ({ page }, use) => {
    await use(new HomeActions(page));
  },
  saucedemoLogin: async ({ page }, use) => {
    await use(new SauceDemoLoginActions(page));
  }
});

module.exports = { test }