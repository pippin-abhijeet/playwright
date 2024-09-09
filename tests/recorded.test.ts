import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {    //isolated page instance

    // pw can't capture hover action
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('xyz@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('1234$%^MXZ');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Register' }).click();

});