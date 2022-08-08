import SharedDataUtils from "@pageObjects/dataUtils";
import SignInPageActions from "@pageObjects/signIn/actions";
import SignInPageAssertions from "@pageObjects/signIn/assertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const signInActions = new SignInPageActions();
const signInAssertions = new SignInPageAssertions();
const sharedDataUtils = new SharedDataUtils();

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
  password: "123456",
};

const invalidUser: NewUser = {
  username: "ConduitUser",
  email: "conduituser@email.com",
  password: "invalid",
};

beforeEach(() => {
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("The user opened the Sign in page", () => {
  signInActions.openLoginPage("#/login");
});

When("The user clicks on Need an account? button", () => {
  signInActions.clickonNeedAnAccount();
});

Then("The Sign up pcheckIsLogedine appear", () => {
  signInAssertions.checkingSignUpPageOpening();
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

When("The user tries to login with an invalid email and password", () => {
  signInActions.addEmail(invalidUser.email);
  signInActions.addPassword(invalidUser.password);
});

Then(
  "An alert for invalid content should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkError(errorMassage);
  }
);

When("The user tries to login with a valid email and invalid password", () => {
  signInActions.addEmail(user.email);
  signInActions.addPassword(invalidUser.password);
});

When("The user tries to login with empty fields for email and password", () => {
  signInActions.addEmail();
  signInActions.addPassword();
});

Then(
  "An alert for email and password blanks should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkError(errorMassage);
  }
);

When(
  "The user tries to login with empty email field and fills any password",
  () => {
    signInActions.addEmail();
    signInActions.addPassword(user.password);
  }
);

Then(
  "An alert for email blank should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkError(errorMassage);
  }
);

When(
  "The user tries to login with a valid email and empty password fields",
  () => {
    signInActions.addEmail(user.email);
    signInActions.addPassword();
  }
);

Then(
  "An alert for password blank should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkError(errorMassage);
  }
);
