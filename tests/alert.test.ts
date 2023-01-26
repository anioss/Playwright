import {chromium, test} from "@playwright/test"


test("handling alerts", async ({}) => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
  const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })
    await page.locator("(//button[@type='button'])[1]").click()
    await page.waitForTimeout(5000);

});