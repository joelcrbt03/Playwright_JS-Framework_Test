const { test } = require('../fixtures/fixtures');
const url = require('../config');

const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./data/data.json'));

test.beforeEach(async ({ common, login }) => {
  await common.openURL(url.getBaseURL());
  // await login.loginToApp(testData.standardAccount);
});

test.describe('Basic Login Flow', () => {

  test.beforeEach('[Pre-requisite] login to app.', async ({ login }) => {
    await login.loginToApp(testData.standardAccount);
  });

  test('[TC 01] verify successful log in', async ({ login }) => {
    await login.verifySuccessLogin("Success");
  });

  test('[TC 02] logout account', async ({ login }) => {
    await login.logoutToApp();
  });

});

test.describe('Negative Login Flow', () => {

  test.beforeEach('[Pre-requisite] login using invalid credentials', async ({ login }) => {
    await login.loginToApp(testData.invalidAccount);
  })

  test('[TC 01] verify unsuccessful log in', async ({ login }) => {
    // TODO
  });
});