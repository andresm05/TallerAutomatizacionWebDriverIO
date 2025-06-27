import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from '../pageobjects/login.page.js';

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

//LOGIN
When(/^I login with (.+) and (.+)$/, async (email, password) => {
  await LoginPage.login(email, password);
});

Then(/^I should see a text saying (.*)$/, async (message) => {
  console.log('Mensaje esperado:', message);
  if (message === "Contact List") {
    const contactHeader = $("//h1[normalize-space()='Contact List']");
    await contactHeader.waitForDisplayed({ timeout: 3000 });
    await expect(contactHeader).toHaveTextContaining(message);
  } else {
    const errorSpan = $("//span[@id='error']");
    await errorSpan.waitForDisplayed({ timeout: 3000 });
    await expect(errorSpan).toHaveTextContaining(message);
  }
});
