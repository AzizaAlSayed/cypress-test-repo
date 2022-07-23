Feature: Login
  
  Scenario: Verify that user can login with a valid email, and password 
    Given The user opened the login page
    When  The user fills in the fields with "larissa77j@gmail.com" and "lara123"
    And   The user clicks on Sign in button
    Then  The "Home" page should be shown