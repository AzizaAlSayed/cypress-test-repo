import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import HomePageAssertions from "@pageObjects/home/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageActions = new HomePageActions();
const homePageAssertions = new HomePageAssertions();
const sharedDataUtils = new SharedDataUtils();

const user: NewUser = {
  username: "ConduitUser",
  email: "conduituser@email.com",
  password: "123456",
};

const article: NewArticle = {
  title: "this is a conduit title post",
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: [],
};

beforeEach(() => {
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("The system has an article created by that user", () => {
  sharedDataUtils
    .getPopularTags()
    .then((tags) => article.tagList.push(tags[0]));
  sharedDataUtils.createArticle(article);
});

Given("A user logged in with an exisiting account", () => {
  cy.login(user.email, user.password);
});

Given("A user was on the Home page", () => {
  homePageActions.openHomePage();
});

Given("The user was on the Home page", () => {
  homePageActions.openHomePage();
});

Given("The user was on the Globale Feed tab", () => {
  homePageActions.openHomePage();
  homePageActions.clickOnGlobaleFeedTab();
});

Given("The user was on a Tag Feed", () => {
  homePageActions.openHomePage();
  homePageActions.clickOnTag();
});

When("The user clicks on Globale Feed tab", () => {
  homePageActions.openHomePage();
  homePageActions.clickOnGlobaleFeedTab();
});

When("The user clicks on Your Feed tab", () => {
  homePageActions.clickOnYourFeedTab();
});

When("The user clicks on a tag", () => {
  homePageActions.clickOnTag();
});

Then("The Your Feed tab should be activated", () => {
  homePageAssertions.checkIsActivatedFeedTab();
});

Then("The Globale Feed tab should be activated", () => {
  homePageAssertions.checkIsActivatedGlobalFeedTab();
});

Then("Articles should be appear", () => {
  cy.intercept("GET", "/api/articles?limit=10&offset=0").as("articles");
  cy.wait(["@articles"]);
  homePageAssertions.checkAriclesExistence();
});

Then("There are no articles that should be appear", () => {
  homePageAssertions.checkAriclesExistence(false);
});

Then("The alert should be appear {string}", (content: string) => {
  homePageAssertions.checkErrorMassage(content);
});

Then("The Tag tab should be hidden", () => {
  homePageAssertions.checkTagTabExistence();
});

Then("The Tag tab should be activated", () => {
  homePageAssertions.checkIsActivatedTagTab();
});

Then("The Tag tab should contains the articles relatied for this tag", () => {
  homePageAssertions.checkTitleValueAtTag(
    article.title,
    article.tagList[0],
    true
  );
});
