Feature: Select a article

Scenario: Verify that user can visit a article from home page
    Given A user was on the Home page 
    When  The user clicks on a article
    Then  The Article page should be appear

Scenario: Verify that user can visit a article from home page
    Given A user logged in with an exisiting account
    And   The user was on the Home page 
    When  The user clicks on a article
    Then  The Article page should be appear
