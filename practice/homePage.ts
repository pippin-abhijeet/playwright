import { Page } from "@playwright/test";

export default class HomePage{
    constructor(public page : Page){

    }

    async clickOnSpecialHot(){
        await this.page.click("'Special Hot'")
    }
}