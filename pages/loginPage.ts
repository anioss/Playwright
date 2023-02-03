import test, { Page } from "@playwright/test";


export default class LoginPage{
    constructor(public page: Page){ }

    async enterEmail(email: string){
        await this.page.locator("input[name='email']")
        .type(email);
    }
    async enterPass(pass: string){
        await this.page.locator("input[type='password']")
        .type(pass)
    }
    async clickLogin(){
        await this.page.click("input[value='Login']")
        await this.page.waitForTimeout(3000);
        
    }

    
}