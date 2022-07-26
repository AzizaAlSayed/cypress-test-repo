import ArticleActions from "@pageObjects/article/actions";
import ArticleAssertions from "@pageObjects/article/assertions";
import SharedDataUtils from "@pageObjects/dataUtils";
import { Article } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const articleActions = new ArticleActions();
const articleAssertions = new ArticleAssertions();
const sharedDataUtils = new SharedDataUtils();

const article: Article = {
  title: "this is a conduit title post",
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

beforeEach(() => {
  cy.login().then(() => {
    sharedDataUtils.createArticle(article).then((articleResult) => {
      article.title = articleResult.title;
      article.body = articleResult.body;
      article.description = articleResult.description;
      article.tagList = articleResult.tagList;
    });
  });
});

Given("The user was at Article page", () => {
  // cy.login("larissa77j@gmail.com", "lara123");
  articleActions.openArticlePage(`http://demo.realworld.io/#/@adminLara`);
});

Given("The user opened an existing post", () => {
  articleActions.clickOnThePost();
});

When("The user clicks on the Delete Article button", () => {
  articleActions.clickOnDeleteArticle();
});

Then("The post should not be shown at article page", () => {
  articleActions.openArticlePage(`http://demo.realworld.io/#/@adminLara`);
  articleAssertions.checkingDeletedPost(article.title);
});
