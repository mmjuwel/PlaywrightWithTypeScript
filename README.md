
# 🚀 Playwright TypeScript Automation Framework

A scalable, enterprise-grade test automation framework built with **Playwright** and **TypeScript**, designed using a **Hybrid Architecture** combining **Page Object Model (POM)** and **Fluent Flow Pattern** for maximum maintainability and readability.

---

## ✨ Key Features

* 🧱 **Page Object Model (POM)** for clean UI abstraction
* 🔗 **Fluent Flow Pattern** for readable test scenarios
* 🧠 **TypeScript Strong Typing** for reliability
* ⚡ **Playwright Test Runner** with parallel execution
* 📊 **Allure & HTML Reporting**
* 🔄 **CI/CD Integration Ready** (GitHub Actions)
* 🌍 **Environment-based configuration**
* 📦 **Reusable utilities & services layer**
* 🧪 Supports **UI + API + E2E testing**

---

## 🏗️ Architecture Overview

This framework follows a layered design:

* **Pages (POM):** Handles UI interactions
* **Flows:** Business-level actions with fluent chaining
* **Assertions:** Validation layer (separated for clarity)
* **Tests:** Clean and readable test scenarios
* **Utils & Services:** Shared reusable logic

---

## 📁 Project Structure

```bash
├── src/
│   ├── pages/          # Page Object Model (UI actions)
│   ├── flows/          # Fluent business flows
│   ├── assertions/     # Validation layer
│   ├── fixtures/       # Custom Playwright fixtures
│   ├── utils/          # Helpers & utilities
│   ├── services/       # API/service layer
│   ├── models/         # TypeScript interfaces/types
│   └── constants/      # Static data
│
├── tests/
│   ├── ui/             # UI test cases
│   ├── api/            # API tests
│   └── e2e/            # End-to-end flows
│
├── configs/            # Environment configs
├── reports/            # Test reports
├── playwright.config.ts
└── package.json
```


---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd playwright-ts-framework
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test

```bash
npx playwright test tests/ui/login.spec.ts
```

### Run in Headed Mode

```bash
npx playwright test --headed
```

---

## 🌍 Environment Configuration

Manage environments using `.env` files:

```env
BASE_URL=https://example.com
ENV=qa
```

---

## 📊 Reporting

* 📄 Playwright HTML Report:

```bash
npx playwright show-report
```

* 📈 Allure Report:

```bash
allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report
```

---

## 🔄 CI/CD Integration

GitHub Actions example included:

```yaml
- run: npm install
- run: npx playwright install
- run: npx playwright test
```

---


## 👨‍💻 Author

**Mansur Mahamud**
Senior Software QA Engineer

---


## Test Report
### Default Playwright Report
<img width="1366" height="633" alt="image" src="https://github.com/user-attachments/assets/c722f927-78ef-4a25-8ca6-2e6b47ca203d" />
