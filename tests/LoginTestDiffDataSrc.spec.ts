import { test, expect } from '@playwright/test'
import { loginPage } from '../src/pages/LoginPage';
import { MyAccountPage } from '../src/pages/MyAccountPage';
import loginTestData from '../test-data/loginTestData.json';
import { readData } from '../src/utils/dataReader';

// const testData = readData('./test-data/LoginTestData.json');
const testData = readData('./test-data/LoginTestData.csv');


test.describe('Login Tests with different data sources', () => {
for (const data of testData) {
        test(`Login Test with ${data.email} and ${data.password} to validate ${data.loginStatus} scenario`, async ({ page }) => {
            const login = new loginPage(page);
            const myAccountPage = new MyAccountPage(page);

            await page.goto('https://sauce-demo.myshopify.com/account/login');
            await login.insertEmailAddress(data.email);
            await login.insertPassword(data.password);
            await login.clickOnLoginButton();

            if (data.loginStatus === 'success') {
                expect(await myAccountPage.getAccountDetailsHeading()).toContain(data.expectedMessage);
            } else if (data.loginStatus === 'failed') {
                await login.clickOnConfirmEmailAddress();
                expect(await login.getErrorMessage()).toContain(data.expectedMessage);
            }

        });
    }
 });