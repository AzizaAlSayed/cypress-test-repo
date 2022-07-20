import NewArticlePageActions from "@pageObjects/newArticle/actions";
import NewArticlePageAssertions from "@pageObjects/newArticle/assertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const newArticlePageActions = new NewArticlePageActions();
const newArticlePageAssertions = new NewArticlePageAssertions();

Given("The user opened the New Article page", () => {
  cy.login("larissa77j@gmail.com", "lara123");
  newArticlePageActions.openNewArticlePage();
});
When("The user fills in the title field with {string}", (title: string) => {
  newArticlePageActions.addTitle(`${title} ${Math.random()}`);
});
When("The user fills in the about field with {string}", (about: string) => {
  newArticlePageActions.addAbout(about);
});
When(
  "The user fills in the article field with {string}",
  (articleContent: string) => {
    newArticlePageActions.addArticle(articleContent);
  }
);
When("The user fills in the tags field with {string}", (tags: string) => {
  newArticlePageActions.addTags(`${tags}{enter}`);
});
When("The user clicks on Publish Article button", () => {
  newArticlePageActions.clickPublish();
});
Then("The article name should be shown in the URL", () => {
  newArticlePageAssertions.checkingTheArticlePage();
});
