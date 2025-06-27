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
  if (message == "Contact List") {
    // valid email and password
    await expect($("//h1[normalize-space()='Contact List']")).toBeExisting();
    await expect($("//h1[normalize-space()='Contact List']")).toHaveTextContaining(message);
  } else {
    // invalid email or password
    await expect($("//span[@id='error']")).toBeExisting();
    await expect($("//span[@id='error']")).toHaveTextContaining(message);
  }
});