import test, { Page }  from "@playwright/test";


export default class HomePage {
    constructor(public page: Page){ }

   async clickOnSpecialHotMenu(){
       await this.page.click("(//span[text()='Hot'])[2]")

    } 

  
    async clickOnContinue(){
        await this.page.click("//a[contains(text(),'Continue')]")
    }    
}