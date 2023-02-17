import test from "@playwright/test";

test("Download files", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Download file with playwright")
    await page.click("#create");

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        await page.click("#link-to-download")
    ])
    const fileName = download[0].suggestedFileName()
    await download[0].saveAs(fileName);

    // const path = await download[0].path();
    // console.log(path);

    await page.waitForTimeout(3000);



})

test("Upload file", async ({page}) => {

    const url = await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    await page.setInputFiles("input[type='file']", ["uploadItems/gfx100s_sample_04_thum-1.jpg"]);
    console.log(url);


    await page.waitForTimeout(3000);


})