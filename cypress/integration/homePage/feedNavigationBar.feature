Feature: Moving between Feed tabs 
 
Scenario: Verify that user can move to Globale Feed tab
    Given A user logged in with an exisiting account
    And   The user was on the Home page
    When  The user clicks on Globale Feed tab
    Then  The Globale Feed tab should be activated
    And   Articles should be appear

Scenario: Verify that user can move from Globale Feed tab to Your Feed tab
    Given A user logged in with an exisiting account
    And   The user was on the Globale Feed tab
    When  The user clicks on Your Feed tab
    Then  The Your Feed tab should be activated
 
Scenario: Verify that user can move from Globale Feed tab to Your Feed tab
    Given A user logged in with an exisiting account
    And   The user was on the Globale Feed tab
    When  The user clicks on Your Feed tab
    Then  The Your Feed tab should be activated
    And   There are no articles that should be appear
    And   The alert should be appear "No articles are here... yet."

Scenario: Verify that user can move from a tag tab Feed tab to Your Feed tab
    Given A user logged in with an exisiting account
    And   The user was on a Tag Feed
    When  The user clicks on Your Feed tab
    Then  The Your Feed tab should be activated
    And   The Tag tab should be hidden

Scenario: Verify that user can move from a tag tab Feed tab to Globale Feed tab
    Given A user logged in with an exisiting account
    And   The user was on a Tag Feed
    When  The user clicks on Globale Feed tab
    Then  The Globale Feed tab should be activated
    And   The Tag tab should be hidden

Scenario: Verify that user can filter articles by tag
    Given A user logged in with an exisiting account
    And   The system has an article created by that user
    And   The user was on the Home page
    When  The user clicks on a tag
    Then  The Tag tab should be activated
    And   The Tag tab should contains the articles relatied for this tag