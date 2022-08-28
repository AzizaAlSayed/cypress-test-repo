import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import ProfileAssertion from "@pageObjects/profile/assertions";
import SettingsPageActions from "@pageObjects/settings/actions";
import SettingsPageAssertions from "@pageObjects/settings/assertions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import moment from "moment";

const settingsPageActions = new SettingsPageActions();
const settingsPageAssertions = new SettingsPageAssertions();
const profileAssertion = new ProfileAssertion();
const sharedDataUtils = new SharedDataUtils();
const sharedAssertions = new SharedAssertions();
const homePageActions = new HomePageActions();

const user: NewUser = {
  username: "ConduitUser",
  email: "conduituser@email.com",
  password: "123456",
};

const newUser: NewUser = {
  bio: "Conduit Bio",
  email: `new${moment().format("hmmss")}${user.email}`,
  image: "https://avatars1.githubusercontent.com/u/8908513?s=280&v=4",
  username: `new${moment().format("hmmss")}${user.username}`,
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
  homePageActions.openSettingsPage();
});

When("The user fills in a new valid profile picture", () => {
  settingsPageActions.typeInImageInput(newUser.image);
});

When("The user clicks on the Update Settings button", () => {
  settingsPageActions.clickOnUpdateSettingsButton();
});

Then("The profile page should be opened", () => {
  sharedAssertions.checkUrlContainsValue(`#/@${user.username}`, true);
});

Then("The picture should be shown on the profile page", () => {
  profileAssertion.checkProfilePicture(newUser.image);
});

When("The user fills in a new valid username", () => {
  settingsPageActions.typeInUsernameInput(newUser.username);
});

Then("The profile should be opened", () => {
  sharedAssertions.checkUrlContainsValue(`#/@${newUser.username}`, true);
});

Then("The username should be shown on the profile page", () => {
  profileAssertion.checkUsernameContent(newUser.username);
});

When("The user fills in a new bio", () => {
  settingsPageActions.typeInBioInput(newUser.bio);
});

Then("The bio should be shown on the profile page", () => {
  profileAssertion.checkBioValue(newUser.bio);
});

When("The user fills in a new valid email", () => {
  settingsPageActions.typeInEmailInput(newUser.email);
});

When("The user fills in a new password", () => {
  settingsPageActions.changePassword(`new${user.password}`);
});

Then("The profile picture only should be changed on the Settings page", () => {
  sharedAssertions.checkUrlContainsValue("#/settings", true);
  settingsPageAssertions
    .checkBioInputContainsValue("")
    .checkEmailInputContainsValue(user.email)
    .checkUsernameInputContainsValue(user.username)
    .checkImgInputContainsValue(newUser.image);
});

Then("The bio only should be changed on the Settings page", () => {
  sharedAssertions.checkUrlContainsValue("#/settings", true);
  settingsPageAssertions
    .checkBioInputContainsValue(newUser.bio)
    .checkEmailInputContainsValue(user.email)
    .checkUsernameInputContainsValue(user.username)
    .checkImgInputContainsValue("");
});

Then("The username only should be changed on the Settings page", () => {
  sharedAssertions.checkUrlContainsValue("#/settings", true);
  settingsPageAssertions
    .checkUsernameInputContainsValue(newUser.username)
    .checkImgInputContainsValue("")
    .checkBioInputContainsValue("")
    .checkEmailInputContainsValue(user.email);
});

Then("The email only should be changed on the Settings page", () => {
  sharedAssertions.checkUrlContainsValue("#/settings", true);
  settingsPageAssertions
    .checkEmailInputContainsValue(newUser.email)
    .checkImgInputContainsValue("")
    .checkBioInputContainsValue("")
    .checkUsernameInputContainsValue(user.username);
});
