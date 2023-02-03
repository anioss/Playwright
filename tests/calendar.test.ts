import test from "@playwright/test";

// test("Calendar demo using fill function", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
//     let date= "2023-02-14"

//     await page.fill("id=birthday", date);
//     await page.waitForTimeout(5000);
// })

test("Calendar demo using moment", async ({page})=> {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")

    await page.click("//input[@placeholder='Start date']")
    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
    const  next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")

    let dateToSelect: string = "March 2022"

    while (await mmYY.textContent() != dateToSelect ){
        await prev.click();
    }

    // await prev.click();
    // await page.click("//td[@class='day'][text()='2']");
     await page.waitForTimeout(5000);
    // await page.close();


    

})