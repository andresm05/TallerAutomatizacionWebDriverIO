Feature: App Contact Login Feature

  Scenario Outline: As a user, I can login to the application of the app contact
    Given I am on the login page
    When I login with <email> and <password>
    Then I should see a text saying <message>

    Examples: 
      | username          | password | message           |
      | pruebaj@gmail.com | 1234567   | Contact List |
      | erroremail@gmail.com | 1234567   | Incorrect username or password |