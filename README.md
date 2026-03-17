# Playwright JS Framework Test - Practice Repo

A modular and scalable UI test automation practice framework built using **Playwright (JavaScript)** with the following key concepts:
- Page Object Model (POM) – locators separated from actions  
- Actions layer – business workflows  
- Fixtures – dependency injection of common actions  
- Config + test data JSON – environment and user-data management  
- Reusable utilities (logger, etc.)  

---

## ⚙️ Prerequisites

- Node.js v18+  
- npm v8+  
- Playwright latest version  

---

## 📥 Installation & Setup

1. Clone the repository:  
   ```bash
     git clone https://github.com/joelcrbt03/Playwright_JS-Framework_Test.git
     cd Playwright_JS-Framework_Test
2. Install dependencies:
   ```bash
   npm install
3. Install Playwright browsers:
   ```bash
   npx playwright install

---

## 📥 Running Test
- Run all tests (headless using default test url):
   ```bash
   npm run test
- Run tests with browser UI (headed):
   ```bash
   npm run test:headed
- Run test in different test url (saucedemo):
   > (Pre-Requisite) Install cross-env 
   ```bash
   npm install --save-dev cross-env
   ```  
   > Run Command
   ```bash
   npm run test:url02
   npm run test:url02:headed
- Run a single test file:
   ```bash
   npx playwright test tests/login.spec.js

---

## 📝 Allure Report
- Install Allure 
   ```bash
   npm install -g allure-commandline
   npm install -D allure-playwright
- Generate & Open Report
   ```bash
   npm run allure:report