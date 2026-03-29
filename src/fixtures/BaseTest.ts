import { test as base, expect, Page } from '@playwright/test';
import { ENV } from '../utils/Env';

import { loginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';

// Define all dependencies
type MyFixtures = {

    loginPage: loginPage;
    myAccountPage: MyAccountPage;
    loggedInPage: Page;
};

// Extend Playwright test
export const test = base.extend<MyFixtures>({

    // ========================
    // 📄 Page Objects
    // ========================
    loginPage: async ({ page }, use) => {
        await use(new loginPage(page));

    },

    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },



    // ========================
    // 🔐 Logged-in session
    // ========================
    loggedInPage: async ({ page }, use) => {
        await page.goto('/login');
        const login = new loginPage(page);

        await login.insertEmailAddress(ENV.EMAIL);
        await login.insertPassword(ENV.PASSWORD);
        await login.clickOnLoginButton();
        await use(page);

        // optional teardown
        await page.context().clearCookies();
    },

});

export { expect };