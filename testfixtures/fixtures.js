const { test: fixture } = require("@playwright/test");

const CommonActions = require("../actions/common.actions");
const LoginActions = require("../actions/login.actions");
const HomeActions = require("../actions/home.actions");

const test = fixture.extend({
  common: async ({ page }, use) => {
    await use(new CommonActions(page));
  },
  login: async ({ page }, use) => {
    await use(new LoginActions(page));
  },
  home: async ({ page }, use) => {
    await use(new HomeActions(page));
  },
});

module.exports = { test }