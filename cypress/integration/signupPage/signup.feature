Feature: Signup

  Scenario: Verify that user can move to login page
    Given The user opened the Signup page
    When  The user clicks on Need an account? button
    Then  The Login page should be appear

  Scenario: Verify that user can not sign up with empty fileds email, username and password 
    Given A user opened the Signup page
    And   The user kept empty fileds email, username and password
    When  The user clicks Sign up button
    Then  An alert page should be shown "email can't be blank"

  Scenario: Verify that user can not sign up with an empty email filed, and valid username and password 
    Given A user opened the Signup page
    When  The user keeps an empty email filed
    And   The user fills a valid username and password 
    And   The user clicks Sign up button
    Then  An alert for email blank page should be shown "email can't be blank"

  Scenario: Verify that user can not sign up with an empty email filed, and taken username and a password 
    Given A user opened the Signup page
    When  The user keeps an empty email filed
    And   The user fills a taken username and a password 
    And   The user clicks Sign up button
    Then  An alert for email blank page should be shown "email can't be blank"

  Scenario: Verify that user can not sign up with an empty username filed, and valid email and password 
    Given A user opened the Signup page
    When  The user keeps an empty username filed
    And   The user fills a valid email and password 
    And   The user clicks Sign up button
    Then  An alert for username blank page should be shown "username can't be blank"

  Scenario: Verify that user can not sign up with an empty username filed, and an existing email and a password 
    Given A user opened the Signup page
    When  The user keeps an empty username filed
    And   The user fills an existing email and a password 
    And   The user clicks Sign up button 
    Then  An alert should be appear "Please include an '@' in the email address"
  
  Scenario: Verify that user can not sign up with an empty username filed, and an invalid email and a password 
    Given A user opened the Signup page
    When  The user keeps an empty username filed
    And   The user fills an invalid email and a password 
    And   The user clicks Sign up button
    Then  An alert should be appear "Please include an '@' in the email address"

  Scenario: Verify that user can not sign up with an empty password filed, and valid email and username 
    Given A user opened the Signup page
    When  The user keeps an empty password filed
    And   The user fills a valid email and username 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "password can't be blank"

  Scenario: Verify that user can not sign up with an empty password filed, and a valid email and a taken username 
    Given A user opened the Signup page
    When  The user keeps an empty password filed
    And   The user fills a valid email and a taken username 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "password can't be blank"

  Scenario: Verify that user can not sign up with an empty password filed, and a valid username and an invalid email  
    Given A user opened the Signup page
    When  The user keeps an empty password filed
    And   The user fills a valid username and an invalid email 
    And   The user clicks Sign up button
    Then  An alert should be appear "Please include an '@' in the email address"

  Scenario: Verify that user can not sign up with an empty password filed, and a valid username and an existing email  
    Given A user opened the Signup page
    When  The user keeps an empty password filed
    And   The user fills a valid username and an existing email 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "password can't be blank"
  
  Scenario: Verify that user can not sign up with empty fileds password and username and valid email 
    Given A user opened the Signup page
    When  The user keeps empty fileds password and username
    And   The user fills a valid email 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "username can't be blank"

  Scenario: Verify that user can not sign up with empty fileds password and username and an invalid email 
    Given A user opened the Signup page
    When  The user keeps empty fileds password and username
    And   The user fills an invalid email 
    And   The user clicks Sign up button
    Then  An alert should be appear "Please include an '@' in the email address"

  Scenario: Verify that user can not sign up with empty fileds password and username and an existing email 
    Given A user opened the Signup page
    When  The user keeps empty fileds password and username
    And   The user fills an existing email 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "username can't be blank"
  
  Scenario: Verify that user can not sign up with empty fileds password and email and valid username 
    Given A user opened the Signup page
    When  The user keeps empty fileds password and email
    And   The user fills a valid username 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "email can't be blank"

  Scenario: Verify that user can not sign up with empty fileds password and email and a taken username 
    Given A user opened the Signup page
    When  The user keeps empty fileds password and email
    And   The user fills a taken username 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "email can't be blank"

  Scenario: Verify that user can not sign up with empty fileds username and email and a password
    Given A user opened the Signup page
    When  The user keeps empty fileds email and username
    And   The user fills a password 
    And   The user clicks Sign up button
    Then  An alert for password blank page should be shown "email can't be blank"

  Scenario: Verify that user can not sign up with a valid email, taken username and a password 
    Given A user opened the Signup page
    When  The user fills a valid email, taken username and a password
    And   The user clicks Sign up button
    Then  The username alert should be shown "username has already been taken"
  
  Scenario: Verify that user can not sign up with an invalid email, taken username and a password 
    Given A user opened the Signup page
    When  The user fills an invalid email, taken username and a password
    And   The user clicks Sign up button
    Then  An alert should be appear "Please include an '@' in the email address"

  Scenario: Verify that user can not sign up with an invalid email, a valid username and a password 
   Given A user opened the Signup page
   When  The user fills an invalid email, a valid username and a password
   And   The user clicks Sign up button
   Then  An alert should be appear "Please include an '@' in the email address"
#
   Scenario: Verify that user can not sign up with an existing email, taken username and a password 
    Given A user opened the Signup page
    When  The user fills an existing email, taken username and a password
    And   The user clicks Sign up button
    Then  The email alert should be shown "email has already been taken"
    And   The username alert should be shown "username has already been taken"

  Scenario: Verify that user can not sign up with an existing email, a valid username and a password 
    Given A user opened the Signup page
    When  The user fills an existing email, a valid username and a password
    And   The user clicks Sign up button
    Then  The email alert should be shown "email has already been taken"
  
  Scenario: Verify that user can sign up with a valid email, username and password 
    Given A user opened the Signup page
    When  The user fills a valid email, username and password
    And   The user clicks Sign up button
    Then  The "Home" page should be shown##