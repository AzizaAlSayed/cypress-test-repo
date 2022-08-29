import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import NewArticlePageActions from "@pageObjects/newArticle/actions";
import NewArticlePageAssertions from "@pageObjects/newArticle/assertions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { NewArticle } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const newArticlePageAssertions = new NewArticlePageAssertions();
const newArticlePageActions = new NewArticlePageActions();
const homePageActions = new HomePageActions();
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
  homePageActions.openNewArticlePage();
});

When("The user fills a title", () => {
  newArticlePageActions.typeInTitleInput(article.title);
});

When("The user fills an about content", () => {
  newArticlePageActions.typeInAboutInput(article.description);
});

When("The user fills an article content", () => {
  newArticlePageActions.typeInArticleInput(article.body);
});

When("The user fills a tag", () => {
  newArticlePageActions.typeInTagsInput(
    article.tagList.map((tag) => `${tag}{enter}`)
  );
});

When("The user clicks on Publish Article button", () => {
  newArticlePageActions.clickOnPublishAeticleButton();
});

Then("The article name should be shown in the URL", () => {
  sharedAssertions.checkUrlContainsValue("article", true);
  newArticlePageAssertions
    .checkTitleContent(article.title)
    .checkArticleContent(article.body)
    .checkTagsInputContainsValue(article.tagList)
    .checkDeleteArticle();
});

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});
