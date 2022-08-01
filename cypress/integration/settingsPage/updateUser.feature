Feature: Edit a User
  
  Scenario: Verify that data can edit by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
