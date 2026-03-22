import { test, expect } from '@playwright/test'
import { loginPage } from '../src/pages/LoginPage';
import { MyAccountPage } from '../src/pages/MyAccountPage';

 test('Login Tests with valid credentials', async ({ page }) => {
    const login = new loginPage(page); 
    const myAccountPage = new MyAccountPage(page);

    await page.goto('https://sauce-demo.myshopify.com/account/login');
    await login.insertEmailAddress('mansurworkplace@gmail.com');
    await login.insertPassword('12345678');
    await login.clickOnLoginButton();

    expect(await myAccountPage.getAccountDetailsHeading()).toContain('Account Details and Order History');  
});
   

 test('Login Tests with invalid credentials', async ({ page }) => {
    const login = new loginPage(page); 

    await page.goto('https://sauce-demo.myshopify.com/account/login');
    await login.insertEmailAddress('wrongemail@gmail.com');
    await login.insertPassword('wrongpassword');
    await login.clickOnLoginButton();

    expect(await login.getErrorMessage()).toContain('Invalid email or password');
});