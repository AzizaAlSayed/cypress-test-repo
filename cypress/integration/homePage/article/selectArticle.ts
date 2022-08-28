import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageActions = new HomePageActions();
const sharedDataUtils = new SharedDataUtils();
const sharedAssertions = new SharedAssertions();

const user: NewUser = {
  username: "ConduitUser",
  email: "conduituser@email.com",
  password: "123456",
};

beforeEach(() => {
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("A user logged in with an exisiting account", () => {
  cy.login(user.email, user.password);
});

Given("The user was on the Home page", () => {
  homePageActions.openHomePage();
  homePageActions.clickOnGlobaleFeedTab();
});

Given("A user was on the Home page", () => {
  cy.intercept("GET", "/api/articles?limit=10&offset=0").as("articles");
  cy.intercept("GET", "/api.realworld.io/api/tags").as("tags");
  homePageActions.openHomePage();
  cy.wait(["@articles", "@tags"]);
});

When("The user clicks on a article", () => {
  cy.intercept("GET", "/api/articles?limit=10&offset=0").as("articles");
  cy.wait(["@articles"]);
  homePageActions.clickOnArticleTitleLink();
});

When("The user clicks on the first article", () => {
  homePageActions.clickOnArticleTitleLink();
});

Then("The Article page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("article", true);
});
