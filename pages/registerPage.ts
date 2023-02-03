import test, { Page } from "@playwright/test"

export default class RegisterPage{

   constructor(public page: Page){ }
   async enterFirstName(firstname: string){
        await this.page.locator("#input-firstname")
        .type(firstname);


    }
    async enterLastName(lastname: string){
        await this.page.locator("#input-lastname")
        .type(lastname);
    }
    async enterEmail(email: string){
        await this.page.locator("input[name='email']")
        .type(email);
    } 
    async enterTelephone(telephone: string){
        await this.page.locator("input[name='telephone']")
        .type(telephone);
    }
    async enterPassword(password:string){
        await this.page.locator("input[name='password']")
        .type(password);
    }
    async confirmPassword(password: string){
        await this.page.locator("input[name='confirm']")
        .type(password);
    }
    async isSubscribeChecked(){
       return  await this.page.locator("#input-newsletter-no").isChecked();

    }
    async clickTermAndCondition(){
        await this.page.click("//label[@for='input-agree']");
    }
    async clickContinue(){
        await this.page.click("input[value='Continue']");
        await this.page.waitForTimeout(3000);

    }
}