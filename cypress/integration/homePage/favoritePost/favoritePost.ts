import HomePageActions from "@pageObjects/home/actions";
import ProfilePageActions from "@pageObjects/profile/actions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageActions = new HomePageActions();
const profilePageActions = new ProfilePageActions();
const sharedAssertions = new SharedAssertions();

Given("A user was on the Home page", () => {
  cy.intercept("GET", "/api/articles?limit=10&offset=0").as("articles");
  cy.intercept("GET", "/api/tags").as("tags");
  homePageActions.openHomePage();
  cy.wait(["@articles", "@tags"]);
});

When("The user clicks on favoraite button", () => {
  profilePageActions.clickOnFavorite();
});

Then("The Sign up page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/register", true);
});
