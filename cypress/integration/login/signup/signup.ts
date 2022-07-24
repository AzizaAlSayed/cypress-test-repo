import SharedDataUtils from "@pageObjects/dataUtils";
import LoginActions from "@pageObjects/siginUp/actions";
import LoginAssertions from "@pageObjects/siginUp/assertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const loginActions = new LoginActions();
const loginAssertions = new LoginAssertions();
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
  loginActions.openLoginPage("#/login");
});

When("The user tries to login with a valid email and password", () => {
  loginActions.addEmail(user.email);
  loginActions.addPassword(user.password);
});

When("The user clicks on Sign in button", () => {
  loginActions.clickSignIn();
});

Then("The {string} page should be shown", (content: string) => {
  loginAssertions.checkLogedin(content);
});
