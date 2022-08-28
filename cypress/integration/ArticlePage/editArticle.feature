Feature: Edit Article
  
  Scenario: Verify that user can open the edit page for an existing article 
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Article page
    When  The user clicks on the Edit Article button
    Then  The Edit page for this article should be appear 
    
  Scenario: Verify that user can change the title for an existing article 
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user adds a new valid title 
    And   The user clicks on the Publish Post button
    Then  The Article page should be appear 
    And   The new title should be shown on the Article page 

  Scenario: Verify that user can not change the title for an existing title 
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The system has already another article created by that user
    And   The user was on the Edit Article page
    When  The user adds a title that already exists title
    And   The user clicks on the Publish Post button
    Then  An alert should be appear "title must be unique"

  Scenario: Verify that user can not republish the post without title for an existing article  
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user remove title 
    And   The user clicks on the Publish Post button
    Then  The alert should be appear "The title is required"
    
   Scenario: Verify that user can change the about for an existing article 
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user fills a new about
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear

  Scenario: Verify that user can not republish the post without about for an existing article  
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user remove about 
    And   The user clicks on the Publish Post button
    Then  The alert for about input should be appear "The about is required"

  Scenario: Verify that user can change the article body for an existing article 
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user fills a new article body
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear
    And   The article body should be shown on the Article page

   Scenario: Verify that user can not republish the post without article body for an existing article  
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user remove article body 
    And   The user clicks on the Publish Post button
    Then  An alert for body input should be appear "The article body is required"

  Scenario: Verify that user can add a tag for an existing article 
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user fills a new tag
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear
    And   The tag should be shown on the Article page

  Scenario: Verify that user can remove a tag for an existing article  
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user remove a tag
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear
    And   The tag should not be shown on the Article page  

  Scenario: Verify that user can remove all tag for an existing article  
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user remove all tag
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear
    And   The tags should not be shown on the Article page

 Scenario: Verify that only the about changes when the user edits it
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user fills in a new about
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear
    And   The about only should be changed on the Edit page

   Scenario: Verify that only the article body changes when the user edits it
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user fills in a new article body
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear
    And   The article body should be shown on the Article page
    And   The article body only should be changed on the Edit page

  Scenario: Verify that only the tags changes when the user edits it
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user fills in new tags
    And   The user clicks on the Publish Post button
    Then  The Article page, should be appear
    And   The tags only should be changed on the Edit page

  Scenario: Verify that only the title changes when the user edits it
    Given A user logged in to the system
    And   The system has an article created by that user
    And   The user was on the Edit Article page
    When  The user adds a new valid title 
    And   The user clicks on the Publish Post button
    Then  The Article page should be appear
    And   The new title should be shown on the Article page 
    And   The title only should be changed on the Edit page

