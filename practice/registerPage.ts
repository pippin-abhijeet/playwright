import {Page} from "@playwright/test"


export default class RegisterPage{

    constructor(public page:Page){

    }

    async enterFirstName(firstname : string){
        await this.page.locator("#input-firstname").pressSequentially(firstname);
    }
    async enterLastName(lastname : string){
        await this.page.locator("input[name='lastname']").pressSequentially(lastname);
    }
    async enterEmail(email : string){
        await this.page.locator("input[name='email']").pressSequentially(email);
    }
    async enterTelephone(phone : string){
        await this.page.locator("input[name='telephone']").pressSequentially(phone);
    }
    async enterPassword(password : string){
        await this.page.locator("input[name='password']").pressSequentially(password);
    }
    async enterConfirmPassword(password : string){
        await this.page.locator("input[name='confirm']").pressSequentially(password);
    }
    async isSubscribeChannel(){
        return await this.page.locator('#input-newletter-no').isChecked();
    }
    async clickTermAndCondition(){
        await this.page.click("#input[name='agree']");
    }
    async clickContinueToRegister(){
        await this.page.click("#input[value='continue']");

    }

}