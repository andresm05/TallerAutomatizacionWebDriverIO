Feature: AppContact add new contact

    Background:
        Given I am on the login page
        When I login with "pruebaj@gmail.com" and "1234567"
    
    Scenario Outline: As a user, I can add a new contact
        Given I am on the contact list page
        When I add a new contact with <firstName> and <lastName> and <birthDate> and <email> and <phone> and <street1> and <street2> and <city> and <stateProvince> and <postalCode> and <country>
        Then I should see a text on the add contact saying <message>

        Examples:
            | firstName | lastName | birthDate | email              | phone      | street1       | street2 | city     | stateProvince | postalCode | country    | message                |
            | Carlos       | Castaño      | 1990-01-01| carlos@udea.edu.co | 1234567890 | Calle 1 #1-1 | Apto 101 | Medellín | Antioquia      | 050001     | Colombia   | Contact List |

        