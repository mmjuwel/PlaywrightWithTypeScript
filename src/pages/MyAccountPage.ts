import{Page, Locator} from '@playwright/test';

export class MyAccountPage {

    readonly page : Page;
    readonly accountDetailHeading : Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountDetailHeading = page.getByRole('heading', { name: 'Account Details and Order History' });
    }
    
    async  getAccountDetailsHeading() : Promise<string> {
        return this.accountDetailHeading.toString();               
    }
    
}
    ;  