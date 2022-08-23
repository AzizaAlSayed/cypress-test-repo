Feature: Login

 Scenario: Verify that user can move to sign up page
    Given The user opened the Sign in page
    When  The user clicks on Need an account? button
    Then  The Sign up page should be appear

  Scenario: Verify that user can login with a valid email and password 
    Given The user opened the login page
    When  The user tries to login with a valid email and password
    And   The user clicks on Sign in button
    Then  The "Home" page should be shown

  Scenario: Verify that user can not login with an invalid email and password 
    Given The user opened the login page
    When  The user tries to login with an invalid email and password
    And   The user clicks on Sign in button
    Then  An alert for invalid content should appear "email or password is invalid"

  Scenario: Verify that user can not login with a valid email and an invalid password 
    Given The user opened the login page
    When  The user tries to login with a valid email and invalid password
    And   The user clicks on Sign in button
    Then  An alert for invalid content should appear "email or password is invalid"

  Scenario: Verify that user can not login with an empty email and password 
    Given The user opened the login page
    When  The user tries to login with empty fields for email and password
    And   The user clicks on Sign in button
    Then  An alert for email and password blanks should appear "email and password can't be blank"
    
  Scenario: Verify that user can not login with an empty email field and password 
    Given The user opened the login page
    When  The user tries to login with empty email field and fills any password
    And   The user clicks on Sign in button
    Then  An alert for email blank should appear "email can't be blank"

  Scenario: Verify that user can not login with a valid email and empty password field
    Given The user opened the login page
    When  The user tries to login with a valid email and empty password fields 
    And   The user clicks on Sign in button
    Then  An alert for password blank should appear "password can't be blank"