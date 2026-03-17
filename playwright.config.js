import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  fullyParallel: true,
  use: {
    headless: false,
    screenshot: 'only-on-failure'
    // video: 'retain-on-failure'
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ]
});
