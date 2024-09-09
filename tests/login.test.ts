import {test,chromium} from "@playwright/test"


//Test BLock -> test runner --> playright test runner

test("login test demo",async () =>{

    const browser = await chromium.launch({
        headless : false   // to start GUI
    });
    const context = await browser.newContext();    // for local storage
    const page = await context.newPage();          // to access personal tab

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    // await page.click("text=Login");
    await page.click("'Login'");

    await page.fill("input[name='email']","xyz@gmail.com");    // (locator,value) , what is 'x-path' ?
    await page.fill("input[name='password']","124421xyz");
    await page.click("input[value='Login']");

    await page.waitForTimeout(2000)

    const newContext = await browser.newContext() // to open new instance of browser

    const page1 = await newContext.newPage();    //cache and session storage are passed to "page1" from "page"
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

    await page1.waitForTimeout(2000)
    
})