import test, { expect } from "@playwright/test";
import RegisterPage from "../pages/registerPage"
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import SpecialHotPage from "../pages/specialHotPage"

// Alt codes
// There may not be forwardtick keys available for the other keyboards, however an alt code exists (Hold left Alt and type the numbers on your num pad).

// The below codes should work on any keyboard.

// Alt + 96 = `
// Alt + 0180 = ´
// Alt + 39 = '

test("Register test_001", async ({page, baseURL})=> {

    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Act");
    await register.enterLastName("tpc");
    await register.enterEmail("geroga14@gmail.com");
    await register.enterTelephone("11111111111");
    await register.enterPassword("123qweASD!");
    await register.confirmPassword("123qweASD!");
    // expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickTermAndCondition();
    await register.clickContinue();


})

test("Login test_002", async ({page, baseURL})=> {

    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.enterEmail("acttesting@gmail.com");
    await login.enterPass("123qweASD!");
    await login.clickLogin();
    await page.waitForTimeout(3000);
    console.log(HomePage);
    expect(await page.title()).toBe("My Account");
})


test.only("add to cart test_003", async ({page,baseURL})=>{
    
    const login = new LoginPage(page);
    const homePage = new HomePage(page);
    const special = new SpecialHotPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.enterEmail("acttesting@gmail.com");
    await login.enterPass("123qweASD!");
    await login.clickLogin();
    await homePage.clickOnSpecialHotMenu();
    //await special.addToCart();
    await homePage.clickOnContinue();
    await page.waitForTimeout(2000);
    await special.addToCart();
    await page.waitForTimeout(2000);

    
    
})