import SharedDataUtils from "@pageObjects/dataUtils";
import ProfileAssertion from "@pageObjects/profile/assertions";
import SettingsActions from "@pageObjects/settings/actions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const settingsActions = new SettingsActions();
const profileAssertion = new ProfileAssertion();
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

Given("A user logged in with an existing account", () => {
  cy.login(user.email, user.password);
});

Given("The user clicked on the Settings tab", () => {
  settingsActions.openSettingsPage();
});

When("The user fills in a new valid username", () => {
  settingsActions.updateUsername(user.username);
});

When("The user clicks on the Update Settings button", () => {
  settingsActions.clickOnUpdateSettings();
});

Then("The profile page should be opened", () => {
  profileAssertion.isAtProfilePage(user.username);
});
