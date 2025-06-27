import Page from './page.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */

class AddContactPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() {
        return $("//input[@id='firstName']");
    }

    get inputLastName() {
        return $("//input[@id='lastName']");
    }

    get inputBirthDate() {
        return $("//input[@id='birthdate']");
    }
    get inputEmail() {
        return $("//input[@id='email']");
    }
    get inputPhone() {
        return $("//input[@id='phone']");
    } 
    get inputStreet1() {
        return $("//input[@id='street1']");
    }
    get inputStreet2() {
        return $("//input[@id='street2']");
    }
    get inputCity() {
        return $("//input[@id='city']");
    }
    get inputState() {
        return $("//input[@id='stateProvince']");
    }
    get inputPostalCode() {
        return $("//input[@id='postalCode']");
    }
    get inputCountry() {
        return $("//input[@id='country']");
    }
    get btnSubmit() {
        return $("//button[@id='submit']");
    }

    async addContact(firstName, lastName, birthDate, email, phone, street1, street2, city, state, postalCode, country) {
        console.log(await browser.getUrl()); // verify you are on the correct URL
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputBirthDate.setValue(birthDate);
        await this.inputEmail.setValue(email);
        await this.inputPhone.setValue(phone);
        await this.inputStreet1.setValue(street1);
        await this.inputStreet2.setValue(street2);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.inputPostalCode.setValue(postalCode);
        await this.inputCountry.setValue(country);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('addContact');
    }
}

export default new AddContactPage();