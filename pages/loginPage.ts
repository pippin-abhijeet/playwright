import {Page} from "@playwright/test";
import { ROUTES } from "./constants";


export default class LoginPage{

    constructor(public page : Page){
    }

    async login(email : string,password : string){
        await this.page.locator('#mat-input-0').pressSequentially(email);
        await this.page.locator('#mat-input-1').pressSequentially(password);
        await this.page.locator('button:has-text("Login")').click()
    }

    async navigate() {
        await this.page.goto(ROUTES.LOGIN);
    }
    
}

