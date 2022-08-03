import SharedDataUtils from "@pageObjects/dataUtils";
import ProfileAssertion from "@pageObjects/profile/assertions";
import SettingsPageActions from "@pageObjects/settings/actions";
import SettingsPageAssertions from "@pageObjects/settings/assertions";
import { NewUser, NewUserResponseBody } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import moment from "moment";

const settingsPageActions = new SettingsPageActions();
const settingsPageAssertions = new SettingsPageAssertions();
const profileAssertion = new ProfileAssertion();
const sharedDataUtils = new SharedDataUtils();

const user: NewUser = {
  username: "ConduitUser",
  email: "conduituser@email.com",
  password: "123456",
};

const newUser: NewUserResponseBody = {
  bio: "Conduit Bio",
  email: `new${moment().format("hmmss")}${user.email}`,
  image: "https://avatars1.githubusercontent.com/u/8908513?s=280&v=4",
  username: `new${moment().format("hmmss")}${user.username}`,
  token: localStorage.getItem("jwtToken"),
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
  settingsPageActions.openSettingsPage();
});

When("The user fills in a new valid profile picture", () => {
  settingsPageActions.updateImg(newUser.image);
});

When("The user clicks on the Update Settings button", () => {
  settingsPageActions.clickOnUpdateSettings();
});

Then("The profile page should be opened", () => {
  profileAssertion.checkUsernameInProfileURL(user.username);
});

Then("The picture should be shown on the profile page", () => {
  profileAssertion.checkProfilePicture(newUser.image);
});

When("The user fills in a new valid username", () => {
  settingsPageActions.updateUsername(newUser.username);
});

Then("The profile should be opened", () => {
  profileAssertion.checkUsernameInProfileURL(newUser.username);
});

Then("The username should be shown on the profile page", () => {
  profileAssertion.checkUsernameContent(newUser.username);
});

When("The user fills in a new bio", () => {
  settingsPageActions.updateBio(newUser.bio);
});

Then("The bio should be shown on the profile page", () => {
  profileAssertion.checkBioContent(newUser.bio);
});

When("The user fills in a new valid email", () => {
  settingsPageActions.updateEmail(newUser.email);
});

When("The user fills in a new password", () => {
  settingsPageActions.changePassword(`new${user.password}`);
});

Then("The profile picture only should be changed on the Settings page", () => {
  settingsPageActions.openSettingsPage();
  settingsPageAssertions
    .checkBioInputContainsValue("")
    .checkEmailInputContainsValue(user.email)
    .checkUsernameInputContainsValue(user.username)
    .checkImgInputContainsValue(newUser.image);
});

Then("The bio only should be changed on the Settings page", () => {
  settingsPageActions.openSettingsPage();
  settingsPageAssertions
    .checkBioInputContainsValue(newUser.bio)
    .checkEmailInputContainsValue(user.email)
    .checkUsernameInputContainsValue(user.username)
    .checkImgInputContainsValue("");
});

Then("The username only should be changed on the Settings page", () => {
  settingsPageActions.openSettingsPage();
  settingsPageAssertions
    .checkUsernameInputContainsValue(newUser.username)
    .checkImgInputContainsValue("")
    .checkBioInputContainsValue("")
    .checkEmailInputContainsValue(user.email);
});

Then("The email only should be changed on the Settings page", () => {
  settingsPageActions.openSettingsPage();
  settingsPageAssertions
    .checkEmailInputContainsValue(newUser.email)
    .checkImgInputContainsValue("")
    .checkBioInputContainsValue("")
    .checkUsernameInputContainsValue(user.username);
});
