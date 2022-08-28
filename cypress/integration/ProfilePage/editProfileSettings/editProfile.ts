import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import ProfilePageActions from "@pageObjects/profile/actions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const profilePageActions = new ProfilePageActions();
const sharedAssertions = new SharedAssertions();
const homePageActions = new HomePageActions();

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

Given("The user was on the profile page", () => {
  homePageActions.openProfilePage(user.username);
  cy.wait("@user");
});

When("The user clicks on Edit Profile Settings", () => {
  profilePageActions.clickOnEditProfileSettings();
});

Then("The Settigs page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/settings", true);
});
