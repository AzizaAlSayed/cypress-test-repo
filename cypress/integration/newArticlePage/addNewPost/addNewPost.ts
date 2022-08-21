import SharedDataUtils from "@pageObjects/dataUtils";
import NewArticlePageActions from "@pageObjects/newArticle/actions";
import NewArticlePageAssertions from "@pageObjects/newArticle/assertions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { NewArticle } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const newArticlePageActions = new NewArticlePageActions();
const newArticlePageAssertions = new NewArticlePageAssertions();
const sharedDataUtils = new SharedDataUtils();
const sharedAssertions = new SharedAssertions();

const article: NewArticle = {
  title: "Cypress Conduit Article Title",
  body: "Cypress Conduit Article Body",
  description: "Cypress Conduit Article Desciptions",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

beforeEach(() => {
  cy.login().then(() => {
    sharedDataUtils.deleteArticleByTitle(article.title);
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
  newArticlePageActions.addTags(article.tagList.map((tag) => `${tag}{enter}`));
});

When("The user clicks on Publish Article button", () => {
  newArticlePageActions.clickOnPublishAeticle();
});

Then("The article name should be shown in the URL", () => {
  sharedAssertions.checkUrlContainsValue("article", true);
  newArticlePageAssertions
    .checkingTheArticlePage()
    .checkTitleContent(article.title)
    .checkingArticleContent(article.body)
    .checkTagsContent(article.tagList)
    .checkingDeleteArticle();
});

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});
