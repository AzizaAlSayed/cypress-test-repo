import SharedDataUtils from "@pageObjects/dataUtils";
import SignInActions from "@pageObjects/signIn/actions";
import SignInAssertions from "@pageObjects/signIn/assertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const signInActions = new SignInActions();
const signInAssertions = new SignInAssertions();
const sharedDataUtils = new SharedDataUtils();

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
  password: "123456",
};

beforeEach(() => {
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("The user opened the login page", () => {
  signInActions.openLoginPage("#/login");
});

When("The user tries to login with a valid email and password", () => {
  signInActions.addEmail(user.email);
  signInActions.addPassword(user.password);
});

When("The user clicks on Sign in button", () => {
  signInActions.clickSignIn();
});

Then("The {string} page should be shown", (content: string) => {
  signInAssertions.checkLogedin(content);
});
