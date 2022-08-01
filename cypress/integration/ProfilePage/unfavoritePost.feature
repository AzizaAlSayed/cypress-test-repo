Feature: Make an Unfavorite Post
  
  Scenario: Verify that user can convint a favorite post to unfavorite
    Given A user logged in with an existing account
    And   The system has a favorited article
    And   The user opened the Favorited tab from their profile page
    When  The user clicks on unfavorite button 
    Then  The article counter favorite should be equal to zero in the Favorited tab
    And   The article counter favorite should be equal to zero in the Articles tab
