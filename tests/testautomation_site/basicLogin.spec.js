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
test.describe('Basic Positive Login Flow', {tag: ["@positive","@ID-001"] }, () => {

  test.beforeEach(async ({ basicLogin }) => {
    await basicLogin._loginToApp(testData.validAccount);
  });

  test('[TC01] verify successful log in', async ({ basicLogin }) => {
    await basicLogin._verifySuccessLogin("Success");
  });

  test('[TC02] logout account', async ({ basicLogin }) => {
    await basicLogin._logoutToApp();
  });

});


/*************************************
  BASIC NEGATIVE LOGIN FLOW TEST CASE
**************************************/
test.describe('Basic Negative Login Flow', {tag: ["@negative","@ID-002"]}, () => {

  test('[TC01] verify negative username', async ({ basicLogin }) => {
    await basicLogin._loginToApp(testData.invalidUsername);
    await basicLogin._verifyNegativeUsername();
  });

  test('[TC02] verify negative password', async ({ basicLogin }) => {
    await basicLogin._loginToApp(testData.invalidPassword);
    await basicLogin._verifyNegativePassword();
  });

});