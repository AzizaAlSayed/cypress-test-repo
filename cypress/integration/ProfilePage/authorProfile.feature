Feature: Trying to visit the author profile

Scenario: Verify that user can visit an author profile from an article page
    Given The system has an article created by an author 
    And   A user was on the article page 
    When  The user clicks on author name 
    Then  The author profile should be appear

Scenario: Verify that user can visit an author profile
    Given The system has an article created by an author 
    And   A user logged in with an exisiting account
    And   The user was at the Home page
    When  The user clicks on author name
    Then  The author profile should be appear

Scenario: Verify that user can visit an author profile
    Given A user was at the Home page
    When  The user clicks on author name
    Then  The author profile should be appear
    

