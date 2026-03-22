import { Page, Locator } from '@playwright/test';
import { MyAccountPage } from './MyAccountPage';

export class loginPage {

    private page: Page;
    readonly emailAddress: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;


    constructor( page: Page) {
        this.page = page;
        this.emailAddress = page.getByRole('textbox', { name: 'Email Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign In' });
        this.errorMessage = page.getByText('Invalid email or password');
    }



    async insertEmailAddress(email: string): Promise<this> {
        await this.emailAddress.fill(email);
        return this;
    }

    async insertPassword(password: string): Promise<this> {
        await this.password.fill(password);
        return this;
    }

    async clickOnLoginButton(): Promise<MyAccountPage> {
        await this.loginButton.click();
        return new MyAccountPage(this.page);
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() || '';
    }


    

}