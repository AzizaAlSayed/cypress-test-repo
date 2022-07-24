import NewArticlePageActions from "@pageObjects/newArticle/actions";
import NewArticlePageAssertions from "@pageObjects/newArticle/assertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const newArticlePageActions = new NewArticlePageActions();
const newArticlePageAssertions = new NewArticlePageAssertions();
const title = `this is a title ${Math.random()}`;
const about = "IDK";
const articleContent = "Bla Bla Bla ...";
const tags = "something";

Given("The user opened the New Article page", () => {
  cy.login();
  newArticlePageActions.openNewArticlePage();
});

When("The user fills a title", () => {
  newArticlePageActions.addTitle(title);
});

When("The user fills an about content", () => {
  newArticlePageActions.addAbout(about);
});

When("The user fills an article content", () => {
  newArticlePageActions.addArticle(articleContent);
});

When("The user fills a tag", () => {
  newArticlePageActions.addTags(`${tags}{enter}`);
});

When("The user clicks on Publish Article button", () => {
  newArticlePageActions.clickPublish();
});

Then("The article name should be shown in the URL", () => {
  newArticlePageAssertions.checkingTheArticlePage();
  newArticlePageAssertions.checkingTitle(title);
  newArticlePageAssertions.checkingArticleContent(articleContent);
  newArticlePageAssertions.checkingTags(tags);
});
