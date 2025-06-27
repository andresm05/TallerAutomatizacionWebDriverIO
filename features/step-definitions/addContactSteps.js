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

Then(/^I should be redirected to the contact list$/, async () => {
  const url = await browser.getUrl();
  console.log('URL actual:', url);
  await expect(url).toContain('/contactList');
});

