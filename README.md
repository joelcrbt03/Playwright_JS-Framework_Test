# Playwright JS Framework Test - Practice Repo

A modular and scalable UI test automation framework built using **Playwright (JavaScript)** with the following key concepts:
- Page Object Model (POM) – locators separated from actions  
- Actions layer – business workflows  
- Fixtures – dependency injection of common actions  
- Config + test data JSON – environment and user-data management  
- Reusable utilities (logger, etc.)  
- Support for DEV / QA / PRD environments  

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
- Run all tests (headless):
   ```bash
   npm test
- Run tests with browser UI (headed):
   ```bash
   npm run test:headed
- Run a single test file:
   ```bash
   npx playwright test tests/login.spec.js
