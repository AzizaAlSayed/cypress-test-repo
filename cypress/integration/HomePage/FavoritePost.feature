Feature: Favorite Post  
  
  Scenario: Verify that user can make a favorite and unfavorite post 
    Given The user opened the My Articles tab
    When  The user clicks on the Favorite button to the first article
    And   The user clicks on the Favorite Articles tab
    And   The user clicks on the unfavorite button to the first article
    Then  The Favorite Articles section should refresh 
    And   The article should not appear in the Favorite Articles section
    And   The article should appear in the My Articles section