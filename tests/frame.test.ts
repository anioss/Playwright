import { expect, test } from "@playwright/test";


test("Interact with rames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("Number of frames = " + allframes.length);
    await page.waitForTimeout(3000)


    const myFrame = page.frame("firstFr")
    await page.waitForTimeout(3000)

    // if(myFrame != null){
    //     await myFrame.fill("","");
    // }
    await myFrame?.fill("input[name='fname']", "anilcaglar")
    await page.waitForTimeout(3000)

    await myFrame?.fill("input[name='lname']", "topcu")

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    await page.waitForTimeout(3000)


})