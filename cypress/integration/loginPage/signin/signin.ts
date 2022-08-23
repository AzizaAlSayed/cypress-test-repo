import SharedDataUtils from "@pageObjects/dataUtils";
import SharedAssertions from "@pageObjects/sharedAssertions";
import SignInPageActions from "@pageObjects/signIn/actions";
import SignInPageAssertions from "@pageObjects/signIn/assertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const signInActions = new SignInPageActions();
const signInAssertions = new SignInPageAssertions();
const sharedDataUtils = new SharedDataUtils();
const sharedAssertions = new SharedAssertions();

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

When("The user cclickSignInButtoned an account? button", () => {
  signInActions.clickOnNeedAnAccountLink();
});

Then("The Sign up pcheckIsLogedine appear", () => {
  sharedAssertions.checkUrlContainsValue("#/register", true);
});

Given("The user opened the login page", () => {
  signInActions.openLoginPage();
});

When("The user tries to login with a valid email and password", () => {
  signInActions.typeInEmailInput(user.email);
  signInActions.typeInpasswordInput(user.password);
});

When("The user clicks on Sign in button", () => {
  signInActions.clickSignInButton();
});

Then("The {string} page should be shown", (content: string) => {
  signInAssertions.checkIsLoggedin(content);
});

When("The user tries to login with an invalid email and password", () => {
  signInActions.typeInEmailInput(invalidUser.email);
  signInActions.typeInpasswordInput(invalidUser.password);
});

Then(
  "An alert for invalid content should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkErrorContent(errorMassage);
  }
);

When("The user tries to login with a valid email and invalid password", () => {
  signInActions.typeInEmailInput(user.email);
  signInActions.typeInpasswordInput(invalidUser.password);
});

When(
  "The user tries to login with empty fields for email and password",
  () => {}
);

When("The user clicks on Need an account? button", () => {
  signInActions.clickOnNeedAnAccountLink();
});

Then(
  "An alert for email and password blanks should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkErrorContent(errorMassage);
  }
);

When(
  "The user tries to login with empty email field and fills any password",
  () => {
    signInActions.typeInpasswordInput(user.password);
  }
);

Then(
  "An alert for email blank should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkErrorContent(errorMassage);
  }
);

When(
  "The user tries to login with a valid email and empty password fields",
  () => {
    signInActions.typeInEmailInput(user.email);
  }
);

Then(
  "An alert for password blank should appear {string}",
  (errorMassage: string) => {
    signInAssertions.checkErrorContent(errorMassage);
  }
);

Then("The Sign up page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/register", true);
});
