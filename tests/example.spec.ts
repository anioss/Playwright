import { test, expect, chromium } from '@playwright/test';

test("Login test demo", async () => {
  const browser = await chromium.launch({
    headless: false
   
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/")
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
  await page.click("'Login'")
  console.log("Clicked")

  await page.fill("input[name='email']", "acttesting@gmail.com")
  await page.fill("input[id='input-password']", "123qweASD!")
  await page.click("input[value='Login']")


  await page.waitForTimeout(5000);

  //OPEN NEW TAB
  const page1 = await context.newPage();
  await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

  await page1.waitForTimeout(5000);




});