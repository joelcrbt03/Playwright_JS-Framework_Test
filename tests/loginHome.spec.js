const { test } = require('../fixtures/fixtures');
const url = require('../config');

const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./data/data.json'));

test.beforeEach(async ({ common, login }) => {
  await common.openURL(url.getBaseURL());
  await login.loginToApp(testData.standardAccount);
});

test.describe('Basic Login Flow', () => {

  test('[TC 01] verify successful log in', async ({ login }) => {
    await login.verifyLogin();
  });

  test('[TC 02] logout account', async ({ login }) => {
    await login.logoutToApp();
  });

});
