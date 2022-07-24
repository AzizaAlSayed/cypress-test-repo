Feature: Delete post
  
  Scenario: Verify that user can delete an exist post 
    Given The user was at Article page
    And   The user opened an existing post
    When  The user clicks on the Delete Article button
    Then  The post should not be shown at article page