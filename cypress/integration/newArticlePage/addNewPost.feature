Feature: Add New Post
  
  Scenario: Verify that user can add a new post
    Given The user opened the New Article page
    When  The user fills a title
    And   The user fills an about content
    And   The user fills an article content
    And   The user fills a tag
    And   The user clicks on Publish Article button
    Then  The article name should be shown in the URL