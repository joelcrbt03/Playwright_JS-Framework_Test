const { test } = require('../../testfixtures/fixtures');
const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./data/data.json'));

test.beforeEach(async ({ common, basicLogin }) => {
  await common.openURL();
  // await basicLogin._loginToApp(testData.standardAccount);
});

/*****************************
  BASIC LOGIN FLOW TEST CASE
******************************/
test.describe('Basic Login Flow', () => {

  test.beforeEach(async ({ basicLogin }) => {
    await basicLogin._loginToApp(testData.validAccount);
  });

  test('[TC 01] verify successful log in', async ({ basicLogin }) => {
    await basicLogin._verifySuccessLogin("Success");
  });

  test('[TC 02] logout account', async ({ basicLogin }) => {
    await basicLogin._logoutToApp();
  });

});


/*************************************
  BASIC NEGATIVE LOGIN FLOW TEST CASE
**************************************/
test.describe('Negative Login Flow', () => {

  test('[TC 01] verify negative username', async ({ basicLogin }) => {
    await basicLogin._loginToApp(testData.invalidUsername);
    await basicLogin._verifyNegativeUsername();
  });

  test('[TC 02] verify negative password', async ({ basicLogin }) => {
    await basicLogin._loginToApp(testData.invalidPassword);
    await basicLogin._verifyNegativePassword();
  });

});