import NewArticlePageActions from "@pageObjects/newArticle/actions";
import NewArticlePageAssertions from "@pageObjects/newArticle/assertions";
import SharedDataUtils from "@pageObjects/dataUtils";
import { NewArticle } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const newArticlePageActions = new NewArticlePageActions();
const newArticlePageAssertions = new NewArticlePageAssertions();
const sharedDataUtils = new SharedDataUtils();

const article: NewArticle = {
  description: "this is a Conduit description",
  title: "this is a Conduit title",
  body: "this is a Conduit body",
  tagList: ["this is a Conduit tag"],
};

beforeEach(() => {
  cy.login("larissa77j@gmail.com", "lara123");
  sharedDataUtils.createArticle(article).then((ArticleResult) => {
    article.description = ArticleResult.description;
    article.tagList = ArticleResult.tagList;
    article.title = ArticleResult.title;
    article.body = ArticleResult.body;
  });
});

Given("The user opened the New Article page", () => {
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
  newArticlePageActions.addTags(`${article.tagList[0]}{enter}`);
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
