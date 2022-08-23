import SharedDataUtils from "@pageObjects/dataUtils";
import SettingsPageActions from "@pageObjects/settings/actions";
import SettingsPageAssertions from "@pageObjects/settings/assertions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const settingsPageActions = new SettingsPageActions();
const settingsPageAssertions = new SettingsPageAssertions();
const sharedAssertions = new SharedAssertions();

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

Given("A user login to the system", () => {
  cy.login(user.email, user.password);
});

Given("The user was at the Settings page", () => {
  settingsPageActions.openSettingsPage();
});

When("The user clicks on or click here to logout button", () => {
  settingsPageActions.clickOnLogoutButton();
});

Then("The Home page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/", true);
});
