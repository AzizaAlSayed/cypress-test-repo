Feature: Try to add comments
  
  Scenario: Verify that user can add a comment to an existing post 
    Given A user login to the system
    And   The system has an article created by that user
    And   The user was at Article page
    When  The user writes a comment 
    And   The user clicks on the Post Comment button
    Then  The comment should be shown on the Article page

  Scenario: Verify that user can delete a comment related to an existing post 
    Given A user login to the system
    And   The system has an article created by that user
    And   The user was at Article page
    And   The user posted a comment 
    When  The user clicks on the rubbish button on the post 
    Then  The comment should be deleted
  
Scenario: Verify that possible to remove a comment in article page that added by the user
    Given The system has an article created by a user 
    And   Another user logged in with an exisiting account
    And   The user was at that Article page
    And   The user added a comment on the article page
    When  The user clicks on the rubbish button on the post 
    Then  The comment should be deleted

Scenario: Verify that user can add a comment on article page for another user
    Given The system has an article created by a user 
    And   Another user logged in with an exisiting account
    And   The user was at that Article page
    When  The user writes a comment 
    And   The user clicks on the Post Comment button
    Then  The comment should be shown on the Article page

Scenario: Verify that user can move to sign up page from article page to add a comment 
    Given The system has an article created by a user 
    And   Another user was on that Article page
    When  The user clicks on sign up 
    Then  The Sign up page should be appear
    
Scenario: Verify that user can move to sign in page from article page to add a comment 
    Given The system has an article created by a user 
    And   Another user was on that Article page    
    When  The user clicks on sign in 
    Then  The Sign in page should be appear