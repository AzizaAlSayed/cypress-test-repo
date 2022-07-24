import NewArticlePageActions from "@pageObjects/newArticle/actions";
import NewArticlePageAssertions from "@pageObjects/newArticle/assertions";
import { NewArticle } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import moment from "moment";

const newArticlePageActions = new NewArticlePageActions();
const newArticlePageAssertions = new NewArticlePageAssertions();

const article: NewArticle = {
  title: `${moment().format("hmmss")} this is a conduit title post`,
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: ["this is a conduit tag post"],
};

Given("The user opened the New Article page", () => {
  cy.login();
  newArticlePageActions.openNewArticlePage();
});

When("The user fills a title", () => {
  newArticlePageActions.addTitle(article.title);
});

When("The user fills an about content", () => {
  newArticlePageActions.addAbout(article.description);
});

When("The user fills an article content", () => {
  newArticlePageActions.addArticle(article.body);
});

When("The user fills a tag", () => {
  newArticlePageActions.addTags(`${article.tagList}{enter}`);
});

When("The user clicks on Publish Article button", () => {
  newArticlePageActions.clickPublish();
});

Then("The article name should be shown in the URL", () => {
  newArticlePageAssertions.checkingTheArticlePage();
  newArticlePageAssertions.checkingTitle(article.title);
  newArticlePageAssertions.checkingArticleContent(article.body);
  newArticlePageAssertions.checkingTags(article.tagList[0]);
  newArticlePageAssertions.checkingDeleteArticle();
});
