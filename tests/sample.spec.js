//// ------------ EXAMPLE TEST CASE FORMAT ------------ ////

/*
test('[TC 01] login with invalid credentials', async ({ loginActions, invalidUser }) => {
  await loginActions.login(invalidUser);
  const errorMsg = await loginActions.getErrorMessage();
  expect(errorMsg).toContain('invalid');
});

test('[TC 02] login with valid credentials', async ({ loginActions, homeActions, validUser }) => {
  await loginActions.login(validUser);
  const loggedIn = await homeActions.isLoggedIn();
  expect(loggedIn).toBeTruthy();

  // await homeActions.logout();
  // const stillLoggedIn = await homeActions.isLoggedIn();
  // expect(stillLoggedIn).toBeFalsy();
});

*/