import {Page} from "@playwright/test";


export default class HomePage{

    constructor(public page : Page){
    }

    async clickLogout(){
        this.page.locator('button:has-text("Logout")').click()
    }

    
}

