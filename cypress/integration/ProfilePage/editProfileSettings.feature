Feature: Click on edit profile settings

Scenario: Verify that user can click on edit profile settings
    Given A user logged in with an existing account
    And   The user was on the profile page 
    When  The user clicks on Edit Profile Settings
    Then  The Settigs page should be appear
