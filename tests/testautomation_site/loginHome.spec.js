const { test } = require('../../testfixtures/fixtures');
const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./data/data.json'));

test.beforeEach(async ({ common, login }) => {
  await common.openURL();
  // await login.loginToApp(testData.standardAccount);
});


/*****************************
  BASIC LOGIN FLOW TEST CASE
******************************/
test.describe('Basic Login Flow', () => {

  test.beforeEach(async ({ login }) => {
    await login._loginToApp(testData.standardAccount);
  });

  test('[TC 01] verify successful log in', async ({ login }) => {
    await login._verifySuccessLogin("Success");
  });

  test('[TC 02] logout account', async ({ login }) => {
    await login._logoutToApp();
  });

});


/*************************************
  BASIC NEGATIVE LOGIN FLOW TEST CASE
**************************************/
test.describe('Negative Login Flow', () => {

  test.beforeEach(async ({ login }) => {
    await login._loginToApp(testData.invalidAccount);
  })

  test('[TC 01] verify unsuccessful log in', async ({ login }) => {
    // TO-DO
  });
});