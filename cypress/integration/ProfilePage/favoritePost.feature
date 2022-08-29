Feature: Make a Favorite Post
   
  Scenario: Verify that user can make an existing post favorite
      Given A user logged in with an existing account
      And   The user made an article created
      And   The user opened their profile page
      When  The user clicks on favorite button 
      Then  The article counter favorite should be equal to one in the Articles tab
      And   The article counter favorite should be equal to one in the Favorited tab

  Scenario: Verify that user can not make an article as a favoraite on the article page
      Given The system has an article created by an author 
      And   A user was on the article page
      When  The user clicks on favorite button 
      Then  The Sign up page should be appear