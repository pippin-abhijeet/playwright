import  LoginPage  from '../pages/loginPage';
import  HomePage  from '../pages/homePage';
import { ROUTES } from '../pages/constants';
import { test, expect } from '@playwright/test';
import { DUMMY_USER } from '../pages/constants';

test.describe('Login Page', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.navigate();
  });

  test('successful login', async ({ page }) => {

    await page.goto(ROUTES.LOGIN);
    await loginPage.login(DUMMY_USER.EMAIL, DUMMY_USER.PASSWORD);
    await expect(page).toHaveURL(ROUTES.HOME);

  });

  test('successful login and logout', async ({ page }) => {

    await loginPage.login(DUMMY_USER.EMAIL, DUMMY_USER.PASSWORD);
    await expect(page).toHaveURL(ROUTES.HOME);

    await homePage.clickLogout();
    await expect(page).toHaveURL(ROUTES.LOGIN);

  });
});