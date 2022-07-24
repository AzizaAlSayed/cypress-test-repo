import SharedDataUtils from "@pageObjects/dataUtils";
import DeleteArticleActions from "@pageObjects/deletePost/actions";
import DeleteArticleAssertions from "@pageObjects/deletePost/assertions";
import { Article } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import moment from "moment";

const deleteArticleActions = new DeleteArticleActions();
const deleteArticleAssertions = new DeleteArticleAssertions();
/*const sharedDataUtils = new SharedDataUtils();

const article: Article = {
  title: `${moment().format("hmmss")} this is a conduit title post`,
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: [],
};

beforeEach(() => {
  cy.login("larissa77j@gmail.com", "lara123");
  sharedDataUtils.createArticle(article).then((articleResult) => {
    article.title = articleResult.title;
    article.body = articleResult.body;
    article.description = articleResult.description;
    article.tagList = articleResult.tagList;
  });
});
*/
Given("The user was at Article page", () => {
  cy.login("larissa77j@gmail.com", "lara123");
  deleteArticleActions.openArticlePage("http://demo.realworld.io/#/@larissa77");
});

Given("The user opened an existing post", () => {
  deleteArticleActions.clickOnThePost();
});

When("The user clicks on the Delete Article button", () => {
  deleteArticleActions.clickOnDeleteArticle();
});

Then("The post should not be shown at article page", () => {
  deleteArticleActions.openArticlePage("http://demo.realworld.io/#/@larissa77");
  deleteArticleAssertions.checkingDeletedPost(
    "this is a title 0.9771764975716835"
  );
});
