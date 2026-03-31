const { test } = require('../../testfixtures/fixtures');
const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./data/data.json'));

test.beforeEach(async ({ common, saucedemoLogin }) => {
  await common.openURL('TestURL02');
  // await saucedemoLogin.loginApp(testData.standardAccount);
});

/*****************************
  BASIC LOGIN FLOW TEST CASE
******************************/
test.describe('[Sauce Demo] Test Login Flow', {tag: ["@ID-101"]}, () => {
    
  test('[TC01] Login with standard user', async ({ saucedemoLogin, saucedemoMain }) => {
        await saucedemoLogin._loginToApp(testData.standardUser);
        await saucedemoMain._verifyMainPageTitle()
    });

  test('[TC02] Login with locked out user', async ({ saucedemoLogin }) => {
        await saucedemoLogin._loginToApp(testData.lockedOutUser);
    });


});