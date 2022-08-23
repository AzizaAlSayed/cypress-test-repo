Feature: Trying to follow the post author

Scenario: Verify that user can not follow the author without register on the article page
    Given The system has an article created by that user 
    And   A user was on the article page
    When  The user clicks on follow author button 
    Then  The Sign up page should be appear

Scenario: Verify that user can not follow the author without register
    Given A user was on the author profile
    When  The user clicks on follow button 
    Then  The Sign up page should be appear

Scenario: Verify that user can follow the author on the article page
    Given The system has an article created by that user 
    And   A user logged in with an exisiting account
    And   The user was on the article page    
    When  The user clicks on follow author button 
    Then  The Follow author button should be toggled to Unfollow author button

Scenario: Verify that user can follow the author
    Given A user logged in with an exisiting account
    And   The user was on the author profile
    When  The user clicks on follow button 
    Then  The Follow author button should be toggled to Unfollow button


