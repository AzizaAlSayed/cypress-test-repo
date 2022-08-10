Feature: logout
  
  Scenario: Verify that user can logout 
    Given A user login to the system
    And   The user was at the Settings page
    When  The user clicks on or click here to logout button
    Then  The Home page should be appear