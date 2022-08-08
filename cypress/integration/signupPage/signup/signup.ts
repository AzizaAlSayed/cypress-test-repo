import SignUpPageActions from "@pageObjects/signup/actions";
import SignUpPageAssertions from "@pageObjects/signup/assertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const signUpPageActions = new SignUpPageActions();
const signUpPageAssertions = new SignUpPageAssertions();

const validUser: NewUser = {
  username: "ConduitNewUser",
  email: "conduituser@test.com",
  password: "123456",
};

const exsitingUser: NewUser = {
  username: "larissa77j",
  email: "larissa77j@gamil.com",
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
  signUpPageActions.clickingOnHaveAccount();
});

When("The user clicks Sign up button", () => {
  signUpPageActions.clickSignup();
});

Then("The Login page should be appear", () => {
  signUpPageAssertions.checkLoginPage();
});

When("The user fills a valid email, username and password", () => {
  signUpPageActions.addEmail(validUser.email);
  signUpPageActions.addUsername(validUser.username);
  signUpPageActions.addPassword(validUser.password);
});

Then("The {string} page should be shown", (content: string) => {
  signUpPageAssertions.checkRegistration(content);
});

Given("The user kept empty fileds email, username and password", () => {
  signUpPageActions.addEmail().addUsername().addPassword();
});

Then("An alert page should be shown {string}", (errorMassage: string) => {
  signUpPageAssertions.hasErrorContent(errorMassage);
});

When("The user keeps an empty email filed", () => {
  signUpPageActions.addEmail();
});

When("The user fills a valid username and password", () => {
  signUpPageActions
    .addUsername(validUser.username)
    .addPassword(validUser.password);
});

Then(
  "An alert for email blank page should be shown {string}",
  (errorMassage: string) => {
    signUpPageAssertions.hasErrorContent(errorMassage);
  }
);

When("The user fills a taken username and a password", () => {
  signUpPageActions
    .addUsername(exsitingUser.username)
    .addPassword(exsitingUser.password);
});

When("The user keeps an empty username filed", () => {
  signUpPageActions.addUsername();
});

When("The user fills a valid email and password", () => {
  signUpPageActions.addEmail(validUser.email).addPassword(validUser.password);
});

Then(
  "An alert for username blank page should be shown {string}",
  (errorMassage: string) => {
    signUpPageAssertions.hasErrorContent(errorMassage);
  }
);

When("The user fills an existing email and a password", () => {
  signUpPageActions
    .addEmail(exsitingUser.username)
    .addPassword(exsitingUser.password);
});

When("The user fills an invalid email and a password", () => {
  signUpPageActions.addEmail(invalidEmail).addPassword(exsitingUser.password);
});

When("The user keeps an empty password filed", () => {
  signUpPageActions.addPassword();
});

When("The user fills a valid email and username", () => {
  signUpPageActions.addEmail(validUser.email).addUsername(validUser.username);
});

Then(
  "An alert for password blank page should be shown {string}",
  (errorMassage: string) => {
    signUpPageAssertions.hasErrorContent(errorMassage);
  }
);

When("The user fills a valid email and a taken username", () => {
  signUpPageActions
    .addEmail(validUser.email)
    .addUsername(exsitingUser.username);
});

When("The user fills a valid username and an existing email", () => {
  signUpPageActions
    .addEmail(exsitingUser.email)
    .addUsername(validUser.username);
});

When("The user fills a valid username and an invalid email", () => {
  signUpPageActions.addEmail(invalidEmail).addUsername(validUser.username);
});

When("The user keeps empty fileds password and username", () => {
  signUpPageActions.addPassword().addUsername();
});

When("The user fills a valid email", () => {
  signUpPageActions.addEmail(validUser.email);
});

When("The user fills an invalid email", () => {
  signUpPageActions.addEmail(invalidEmail);
});

When("The user fills an existing email", () => {
  signUpPageActions.addEmail(exsitingUser.email);
});

When("The user keeps empty fileds password and email", () => {
  signUpPageActions.addEmail().addPassword();
});

When("The user fills a valid username", () => {
  signUpPageActions.addUsername(validUser.username);
});

When("The user fills a taken username", () => {
  signUpPageActions.addUsername(exsitingUser.username);
});

When("The user keeps empty fileds email and username", () => {
  signUpPageActions.addUsername().addEmail();
});

When("The user fills a password", () => {
  signUpPageActions.addPassword(validUser.password);
});

When("The user fills a valid email, taken username and a password", () => {
  signUpPageActions
    .addPassword(validUser.password)
    .addEmail(validUser.email)
    .addUsername(exsitingUser.username);
});

Then("The username alert should be shown {string}", (errorMassage: string) => {
  signUpPageAssertions.hasErrorContent(errorMassage);
});

When("The user fills an invalid email, taken username and a password", () => {
  signUpPageActions
    .addPassword(validUser.password)
    .addEmail(invalidEmail)
    .addUsername(exsitingUser.username);
});

Then("An alert should be appear {string}", () => {
  signUpPageAssertions.checkEmailAlert();
});

When("The user fills an invalid email, a valid username and a password", () => {
  signUpPageActions
    .addPassword(validUser.password)
    .addEmail(invalidEmail)
    .addUsername(validUser.username);
});

When("The user fills an existing email, taken username and a password", () => {
  signUpPageActions
    .addPassword(validUser.password)
    .addEmail(exsitingUser.email)
    .addUsername(exsitingUser.username);
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
      .addPassword(validUser.password)
      .addEmail(exsitingUser.email)
      .addUsername(validUser.username);
  }
);
