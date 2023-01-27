import {test} from "@playwright/test"


test("handling dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        label: "Tuesday"
        
    
    })

    
});

test("selectList", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.locator("option[value='Florida']").click()
    console.log()
    await page.waitForTimeout(2000);
});
