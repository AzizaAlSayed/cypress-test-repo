Feature: Make a Favorite Post
  
  Scenario: Verify that user can make an existing post favorite
    Given A user logged in with an existing account
    And   The user created an article 
    And   The user opened their profile page
    When  The user clicks on favorite button 
    Then  The article counter favorite should be equal to one in the Articles tab
    And   The article counter favorite should be equal to one in the Favorited tab


