import { Page } from "@playwright/test";



export default class SpecialHotPage{

    constructor(public page: Page){ }


   async addToCart(){
        await this.page.hover("((//img[@alt='iMac'])[1]", {
            strict: false
        });
        await this.page.locator("((//button[@title='Add to Cart']//i)[1]")
        .nth(0).click();
    }
    async isToastVisible(){
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({state:"visible"})
        return toast;
    }

  
}