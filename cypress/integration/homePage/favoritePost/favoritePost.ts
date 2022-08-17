import HomePageActions from "@pageObjects/home/actions";
import HomePageAssertion from "@pageObjects/home/assertions";
import ProfilePageActions from "@pageObjects/profile/actions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageActions = new HomePageActions();
const homePageAssertion = new HomePageAssertion();
const profilePageActions = new ProfilePageActions();

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
  homePageAssertion.checkSingUpPageIsOpen();
});
