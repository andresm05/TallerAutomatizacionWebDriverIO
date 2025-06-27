import { Given, When, Then } from "@wdio/cucumber-framework";
import addContactPage from "../pageobjects/addContact.page.js";


Given(/^I am on the contact list page$/, async () => {
    await addContactPage.open();
});

// ADD CONTACT
When(/^I add a new contact with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
    async (firstName, lastName, birthDate, email, phone, street1, street2, city, state, postalCode, country) => {
        await addContactPage.addContact(firstName, lastName, birthDate, email, phone, street1, street2, city, state, postalCode, country);
    });

Then(/^I should see a text on the add contact saying (.*)$/, async (message) => {
    if (message === "Contact List") {
        const header = $("//h1[normalize-space()='Contact List']");
        await header.waitForDisplayed({ timeout: 5000 });
        await expect(header).toHaveTextContaining(message);
    } else {
        throw new Error(`Unsupported message: ${message}. Falta implementar validación para este texto.`);
    }
});

