import LoginActions from "@pageObjects/Login/actions";
import LoginAssertions from "@pageObjects/Login/assertions";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginActions = new LoginActions();
const loginAssertions = new LoginAssertions();

Given("The user opened the login page", () => {
  loginActions.openLoginPage("http://demo.realworld.io/#/login");
  loginAssertions.checkURL();
});
When(
  "The user fills in the fields with {string} and {string}",
  (email: string, password: string) => {
    loginActions.addEmail(email);
    loginActions.addPassword(password);
  }
);
When("The user clicks on Sign in button", () => {
  loginActions.clickSignIn();
});
Then("The {string} page should be shown", (content: string) => {
  loginAssertions.checkLogedin(content);
});
