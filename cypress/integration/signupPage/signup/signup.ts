import SharedAssertions from "@pageObjects/sharedAssertions";
import SignUpPageActions from "@pageObjects/signup/actions";
import SignUpPageAssertions from "@pageObjects/signup/assertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const signUpPageActions = new SignUpPageActions();
const signUpPageAssertions = new SignUpPageAssertions();
const sharedAssertions = new SharedAssertions();

const validUser: NewUser = {
  username: "ConduitNewUser",
  email: "conduituser@test.com",
  password: "123456",
};

const exsitingUser: NewUser = {
  username: "conduituser",
  email: "conduituser@test.com",
  password: "123456",
};

const invalidEmail = "invalidEmail";

Given("The user opened the Signup page", () => {
  signUpPageActions.openSignUpPage();
});

Given("A user opened the Signup page", () => {
  signUpPageActions.openSignUpPage();
});

When("The user clicks on Need an account? button", () => {
  signUpPageActions.clickOnHaveAnAccountLink();
});

When("The user clicks Sign up button", () => {
  signUpPageActions.clickSignupButton();
});

Then("The Login page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/login", true);
});

When("The user fills a valid email, username and password", () => {
  signUpPageActions.typeInEmailInput(validUser.email);
  signUpPageActions.typeInUsernameInput(validUser.username);
  signUpPageActions.typeInPasswordInput(validUser.password);
});

Then("The {string} page should be shown", (content: string) => {
  signUpPageAssertions.checkRegistration(content);
});

Given("The user kept empty fileds email, username and password", () => {});

Then("An alert page should be shown {string}", (errorMassage: string) => {
  signUpPageAssertions.hasErrorContent(errorMassage);
});

When("The user keeps an empty email filed", () => {});

When("The user fills a valid username and password", () => {
  signUpPageActions
    .typeInUsernameInput(validUser.username)
    .typeInPasswordInput(validUser.password);
});

Then(
  "An alert for email blank page should be shown {string}",
  (errorMassage: string) => {
    signUpPageAssertions.hasErrorContent(errorMassage);
  }
);

When("The user fills a taken username and a password", () => {
  signUpPageActions
    .typeInUsernameInput(exsitingUser.username)
    .typeInPasswordInput(exsitingUser.password);
});

When("The user keeps an empty username filed", () => {});

When("The user fills a valid email and password", () => {
  signUpPageActions
    .typeInEmailInput(validUser.email)
    .typeInPasswordInput(validUser.password);
});

Then(
  "An alert for username blank page should be shown {string}",
  (errorMassage: string) => {
    signUpPageAssertions.hasErrorContent(errorMassage);
  }
);

When("The user fills an existing email and a password", () => {
  signUpPageActions
    .typeInEmailInput(exsitingUser.username)
    .typeInPasswordInput(exsitingUser.password);
});

When("The user fills an invalid email and a password", () => {
  signUpPageActions
    .typeInEmailInput(invalidEmail)
    .typeInPasswordInput(exsitingUser.password);
});

When("The user keeps an empty password filed", () => {});

When("The user fills a valid email and username", () => {
  signUpPageActions
    .typeInEmailInput(validUser.email)
    .typeInUsernameInput(validUser.username);
});

Then(
  "An alert for password blank page should be shown {string}",
  (errorMassage: string) => {
    signUpPageAssertions.hasErrorContent(errorMassage);
  }
);

When("The user fills a valid email and a taken username", () => {
  signUpPageActions
    .typeInEmailInput(validUser.email)
    .typeInUsernameInput(exsitingUser.username);
});

When("The user fills a valid username and an existing email", () => {
  signUpPageActions
    .typeInEmailInput(exsitingUser.email)
    .typeInUsernameInput(validUser.username);
});

When("The user fills a valid username and an invalid email", () => {
  signUpPageActions
    .typeInEmailInput(invalidEmail)
    .typeInUsernameInput(validUser.username);
});

When("The user keeps empty fileds password and username", () => {});

When("The user fills a valid email", () => {
  signUpPageActions.typeInEmailInput(validUser.email);
});

When("The user fills an invalid email", () => {
  signUpPageActions.typeInEmailInput(invalidEmail);
});

When("The user fills an existing email", () => {
  signUpPageActions.typeInEmailInput(exsitingUser.email);
});

When("The user keeps empty fileds password and email", () => {});

When("The user fills a valid username", () => {
  signUpPageActions.typeInUsernameInput(validUser.username);
});

When("The user fills a taken username", () => {
  signUpPageActions.typeInUsernameInput(exsitingUser.username);
});

When("The user keeps empty fileds email and username", () => {});

When("The user fills a password", () => {
  signUpPageActions.typeInPasswordInput(validUser.password);
});

When("The user fills a valid email, taken username and a password", () => {
  signUpPageActions
    .typeInPasswordInput(validUser.password)
    .typeInEmailInput(validUser.email)
    .typeInUsernameInput(exsitingUser.username);
});

Then("The username alert should be shown {string}", (errorMassage: string) => {
  signUpPageAssertions.hasErrorContent(errorMassage);
});

When("The user fills an invalid email, taken username and a password", () => {
  signUpPageActions
    .typeInPasswordInput(validUser.password)
    .typeInEmailInput(invalidEmail)
    .typeInUsernameInput(exsitingUser.username);
});

Then("An alert should be appear {string}", () => {
  signUpPageAssertions.checkEmailAlert();
});

When("The user fills an invalid email, a valid username and a password", () => {
  signUpPageActions
    .typeInPasswordInput(validUser.password)
    .typeInEmailInput(invalidEmail)
    .typeInUsernameInput(validUser.username);
});

When("The user fills an existing email, taken username and a password", () => {
  signUpPageActions
    .typeInPasswordInput(validUser.password)
    .typeInEmailInput(exsitingUser.email)
    .typeInUsernameInput(exsitingUser.username);
});

Then("The username alert should be shown {string}", (errorMassage: string) => {
  signUpPageAssertions.hasErrorContent(errorMassage);
});

Then("The email alert should be shown {string}", (errorMassage: string) => {
  signUpPageAssertions.hasErrorContent(errorMassage);
});

When(
  "The user fills an existing email, a valid username and a password",
  () => {
    signUpPageActions
      .typeInPasswordInput(validUser.password)
      .typeInEmailInput(exsitingUser.email)
      .typeInUsernameInput(validUser.username);
  }
);
