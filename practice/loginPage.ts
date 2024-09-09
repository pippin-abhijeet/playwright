import { Page } from "@playwright/test";

export default class LoginPage{
    constructor(public page : Page){

    }

    async enterEmail(email : string){
        await this.page.locator("input[name='email']").pressSequentially(email);
    }
    
    async enterLoginPassword(password : string){
        await this.page.locator("input[name='password']").pressSequentially(password);
    }

    async clickLoginButton(){
        await this.page.click("input[value='login']")
    }


}