Feature: Edit a User

    Scenario: Verify that only the profile picture changes when the user edits it
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The profile picture only should be changed on the Settings page

Scenario: Verify that only the bio changes when the user edits it
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new bio
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The bio only should be changed on the Settings page
 
Scenario: Verify that only the username changes when the user edits it
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username 
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username only should be changed on the Settings page
 
Scenario: Verify that only the email changes when the user edits it
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The email only should be changed on the Settings page

 Scenario: Verify that data can change the profile picture by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page
 
  Scenario: Verify that data can change the username by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page
    
  Scenario: Verify that data can change the bio by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new bio
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
     
  Scenario: Verify that data can change the password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened

  Scenario: Verify that data can change the profile picture and the username by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid username
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The picture should be shown on the profile
    And   The username should be shown on the profile page

  Scenario: Verify that data can change the profile picture and the bio by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new bio
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the profile picture and email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page
     
  Scenario: Verify that data can change the profile picture and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page

     
 Scenario: Verify that data can change the profile picture, username and bio by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid username
    And   The user fills in a new bio
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The picture should be shown on the profile page
    And   The username should be shown on the profile page  
    And   The bio should be shown on the profile page  

 Scenario: Verify that data can change the profile picture, username and email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid username
    And   The user fills in a new email
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The picture should be shown on the profile page
    And   The username should be shown on the profile page 

  Scenario: Verify that data can change the profile picture, username and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid username
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The picture should be shown on the profile page
    And   The username should be shown on the profile page 

  Scenario: Verify that data can change the profile picture, username, bio and email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid username
    And   The user fills in a new bio
    And   The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The picture should be shown on the profile page
    And   The username should be shown on the profile page  
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the profile picture, username, bio and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid username
    And   The user fills in a new bio
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The picture should be shown on the profile page
    And   The username should be shown on the profile page  
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the profile picture, username, bio, email and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid username
    And   The user fills in a new bio
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The picture should be shown on the profile page
    And   The username should be shown on the profile page  
    And   The bio should be shown on the profile page

   Scenario: Verify that data can change the profile picture, bio and email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new bio
    And   The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the profile picture, bio and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new bio
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page
    And   The bio should be shown on the profile 
    
  Scenario: Verify that data can change the profile picture, bio, email and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new bio
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the profile picture, email and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid profile picture
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page

   Scenario: Verify that data can change the username and the bio by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user fills in a new bio
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page  
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the username and the email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page

 Scenario: Verify that data can change the username and the password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    And   The user fills in a new valid username
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page 

 Scenario: Verify that data can change the username, bio and email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user fills in a new bio
    And   The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page 
    And   The bio should be shown on the profile page 

   Scenario: Verify that data can change the username, bio and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user fills in a new bio
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page 
    And   The bio should be shown on the profile page

 Scenario: Verify that data can change the username, bio, email and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user fills in a new bio
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page 
    And   The bio should be shown on the profile page 
   
   Scenario: Verify that data can change the username, email and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page 

  Scenario: Verify that data can change the username, bio and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new valid username
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile should be opened
    And   The username should be shown on the profile page
    And   The user fills in a new bio

 Scenario: Verify that data can change the bio and the email by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    And   The user fills in a new bio
    And   The user fills in a new valid email
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The bio should be shown on the profile page
    
 Scenario: Verify that data can change the bio and the password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    And   The user fills in a new bio
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The picture should be shown on the profile page
    And   The bio should be shown on the profile page

  Scenario: Verify that data can change the bio, email and password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    When  The user fills in a new bio
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened
    And   The user fills in a new bio

   Scenario: Verify that data can change the email and the password by the user
    Given A user logged in with an existing account
    And   The user clicked on the Settings tab
    And   The user fills in a new valid email
    And   The user fills in a new password
    And   The user clicks on the Update Settings button
    Then  The profile page should be opened