const ENV = process.env.TEST_ENV || 'DEV';

const config = {
  DEV: {
    baseURL: 'https://practicetestautomation.com/practice-test-login/',
  },
  STG: {
    baseURL: 'https://stage.example.com/login',
  },
  PRD: {
    baseURL: 'https://example.com/login',
  },
};

function getBaseURL() {
  return config[ENV].baseURL;
}

module.exports = { getBaseURL };
