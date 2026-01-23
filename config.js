const ENV = process.env.ENV || 'TestURL01';

const config = {
  TestURL01: {
    baseURL: 'https://practicetestautomation.com/practice-test-login/',
  },
  TestURL02: {
    baseURL: 'https://www.saucedemo.com/',
  },
  TestURL03: {
    baseURL: 'https://example.com/login',
  },
};

function getBaseURL() {
  return config[ENV].baseURL;
}

module.exports = { getBaseURL };
