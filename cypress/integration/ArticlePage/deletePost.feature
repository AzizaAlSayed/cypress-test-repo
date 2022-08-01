Feature: Delete post
  
  Scenario: Verify that user can delete an exist post 
    Given A user login to the system
    And   The system has an article created by that user
    And   The user was at Article page
    When  The user clicks on the Delete Article button
    Then  The post should be deleted
