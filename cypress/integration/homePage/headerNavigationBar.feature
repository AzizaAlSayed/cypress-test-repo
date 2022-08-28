Feature: Moving between Header tabs 

Scenario: Verify that user can move from sign up page to sign in page by the navigation bar 
    Given A user was at the Sigin up page
    When  The user clicks on sign in on the navigation bar
    Then  The Sign in page should be appear 

Scenario: Verify that user can move from sign up page to home page by the navigation bar
    Given A user was at the Sigin up page
    When  The user clicks on home on the navigation bar
    Then  The home page should be appear  

Scenario: Verify that user can move from sign up page to home page by the Conduit logo 
    Given A user was at the Sigin up page
    When  The user clicks on Conduit logo
    Then  The home page should be appear 

Scenario: Verify that user can move from sign in page to sign up page by the navigation bar 
    Given A user was at the Sigin in page
    When  The user clicks on sign up on the navigation bar
    Then  The Sign up page should be appear  

Scenario: Verify that user can move from sign in page to home page by the navigation bar 
    Given A user was at the Sigin in page
    When  The user clicks on home on the navigation bar
    Then  The home page should be appear 

 Scenario: Verify that user can move from sign in page to home page by the Conduit logo 
    Given A user was at the Sigin in page
    When  The user clicks on Conduit logo
    Then  The home page should be appear 

Scenario: Verify that user can move from home page to sign up by using the navigation bar
    Given A user was at the Home page
    When  The user clicks on sign up on the navigation bar
    Then  The Sign up page should be appear

Scenario: Verify that user can move from home page to new article page by the navigation bar
    Given A user logged in with an existing account
    And   The user was at the Home page
    When  The user clicks on new article on the navigation bar
    Then  The New Articles page should be appear
    
Scenario: Verify that user can move from home page to settings page by the navigation bar
    Given A user logged in with an existing account
    And   The user was at the Home page
    When  The user clicks on settings on the navigation bar
    Then  The Settings page should be appear

Scenario: Verify that user can move from home page to user profile page by the navigation bar
    Given A user logged in with an existing account
    And   The user was at the Home page
    When  The user clicks on username on the navigation bar
    Then  The User Profile page should be appear

Scenario: Verify that user can move from new article page to home page by the navigation bar
    Given A user logged in with an existing account
    And   The user was at the New Article page
    When  The user clicks on home on the navigation bar
    Then  The Home page should be appear

Scenario: Verify that user can move from new article page to home page by Conduit logo
    Given A user logged in with an existing account
    And   The user was at the New Article page
    When  The user clicks on Conduit logo
    Then  The Home page should be appear

Scenario: Verify that user can move from settings page to home page by the navigation bar
    Given A user logged in with an existing account
    And   The user was at the Settings page
    When  The user clicks on home on the navigation bar
    Then  The Home page should be appear

Scenario: Verify that user can move from settings page to home page by Conduit logo
    Given A user logged in with an existing account
    And   The user was at the Settings page
    When  The user clicks on Conduit logo
    Then  The Home page should be appear

Scenario: Verify that user can from user profile page move to home page by the navigation bar
    Given A user logged in with an existing account
    And   The user was at the User Profile page
    When  The user clicks on home on the navigation bar
    Then  The Home page should be appear

Scenario: Verify that user can move from user profile page to home page by Conduit logo
    Given A user logged in with an existing account
    And   The user was at the User Profile page
    When  The user clicks on Conduit logo
    Then  The Home page should be appear

Scenario: Verify that user can move from article page to home page by the navigation bar
    Given A user created an article page 
    And   Another user was on the article page
    When  The user clicks on home on the navigation bar
    Then  The Home page should be appear

Scenario: Verify that user can move from article page to sign in page by the navigation bar 
    Given A user created an article page 
    And   Another user was on the article page
    When  The user clicks on sign in on the navigation bar
    Then  The Sign in page should be appear

Scenario: Verify that user can move from article page to sign up page by the navigation bar 
    Given A user created an article page 
    And   Another user was on the article page
    When  The user clicks on sign up on the navigation bar
    Then  The Sign up page should be appear

Scenario: Verify that user can move from author page to home page page by Conduit logo 
    Given A user was at the author profile
    When  The user clicks on Conduit logo 
    Then  The Home page should be appear

Scenario: Verify that user can move from article page to home page by home the navigation bar
    Given A user was at the author profile
    When  The user clicks on home on the navigation bar
    Then  The Home page should be appear

Scenario: Verify that user can move from profile page to sign in page by the navigation bar 
    Given A user was at the author profile
    When  The user clicks on sign in on the navigation bar
    Then  The Sign in page should be appear

Scenario: Verify that user can move to home page from article page by conduit logo from author page
    Given A user logged in with an existing account
    And   The user was at the author profile
    When  The user clicks on Conduit logo 
    Then  The Home page should be appear

Scenario: Verify that user can move to home page from article page by home link on the navigation bar
    Given A user logged in with an existing account
    And   The user was at the author profile   
    When  The user clicks on home on the navigation bar
    Then  The Home page should be appear
@focus
Scenario: Verify that user can move to sign in by using the navigation bar from article page
    Given A user was at the author profile  
    When  The user clicks on sign in on the navigation bar
    Then  The Sign in page should be appear
@focus
Scenario: Verify that user can move to sign up by using the navigation bar from article page
    Given A user was at the author profile  
    When  The user clicks on sign up on the navigation bar
    Then  The Sign up page should be appear

Scenario: Verify that user can move to home page from article page by conduit logo from article page
    Given A user created an article page 
    And   Another user logged in with an existing account
    And   The second user was on an article page
    When  The user clicks on Conduit logo 
    Then  The Home page should be appear
    