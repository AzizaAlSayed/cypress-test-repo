Feature: try to make a Favorite Post 

Scenario: Verify that user can not make an article as a favoraite on the home page
    Given A user was on the Home page
    When  The user clicks on favoraite button
    Then  The Sign up page should be appear
