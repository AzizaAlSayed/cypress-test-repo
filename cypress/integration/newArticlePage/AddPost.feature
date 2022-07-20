Feature: Add New Post
  
  Scenario: Verify that user can add a new post
    Given The user opened the New Article page
    When  The user fills in the title field with "this is a title" 
    And   The user fills in the about field with "IDK"
    And   The user fills in the article field with "Bla Bla Bla"
    And   The user fills in the tags field with "@somthing"
    And   The user clicks on Publish Article button
    Then  The article name should be shown in the URL