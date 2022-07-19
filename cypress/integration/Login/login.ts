import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginConduit } from "@pageObjects/LoginConduit";

const loginPage = new LoginConduit();

Given("The user opened the login page", () => {
  cy.login()
  loginPage.navigate("http://demo.realworld.io/#/login");
  loginPage.checkURL();
});
When(
  "The user fills in the fields with {string} and {string}",
  (username: string, password: string) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
  }
);
When("The user clicks on Sign in button", () => {
  loginPage.clickLoging();
});
Then("The {string} page should be shown", (content: string) => {
  loginPage.checkLogedin(content);
});
