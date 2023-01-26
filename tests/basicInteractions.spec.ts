import  { test,chromium, expect } from "@playwright/test";


test("checkBox", async ({ }) => {
    const browser = await chromium.launch({
        headless: false
       
      });
      const context = await browser.newContext();
      const page = await context.newPage();

    
    await page.goto("https://demoqa.com/radio-button");
    await page.waitForTimeout(5000);
    // await page.screenshot();

    const radioButton = page.locator("id=impressiveRadio");
    expect(radioButton).not.toBeChecked();
    await radioButton.check();
    expect(radioButton).toBeChecked();

});