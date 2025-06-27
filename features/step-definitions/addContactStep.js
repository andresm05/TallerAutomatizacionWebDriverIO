import { Given, When, Then } from "@wdio/cucumber-framework";

import addContactPage from "../pageobjects/addContact.page";

const pages = {
    login: addContactPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

// ADD CONTACT
When(/^I add a new contact with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
    async (firstName, lastName, birthDate, email, phone, street1, street2, city, state, postalCode, country) => {
        await addContactPage.addContact(firstName, lastName, birthDate, email, phone, street1, street2, city, state, postalCode, country);
    });

Then(/^I should see a text saying (.*)$/, async (message) => {
    if (message === "Contact List") {
        await expect($("//h1[normalize-space()='Contact List']")).toBeExisting();
        await expect($("//h1[normalize-space()='Contact List']")).toHaveTextContaining(message);
    }
});

