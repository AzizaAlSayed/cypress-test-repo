import ArticlePageActions from "@pageObjects/article/actions";
import SharedDataUtils from "@pageObjects/dataUtils";
import NewArticlePageActions from "@pageObjects/newArticle/actions";
import NewArticlePageAssertions from "@pageObjects/newArticle/assertions";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const sharedAssertions = new SharedAssertions();
const articlePageActions = new ArticlePageActions();
const newArticlePageAssertions = new NewArticlePageAssertions();
const newArticlePageActions = new NewArticlePageActions();

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
  password: "123456",
};

const article: NewArticle = {
  title: "this is a conduit title post",
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

const newArticle: NewArticle = {
  title: "Cypress Conduit Article Title",
  body: "Cypress Conduit Article Body",
  description: "Cypress Conduit Article Desciptions",
  tagList: ["conduit-tag3", "conduit-tag4"],
};

const newArticleForinvalidTitle: NewArticle = {
  title: "Conduit Article Title",
  body: "Conduit Article Body",
  description: "Conduit Article Desciptions",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

let articleSlug: string;

beforeEach(() => {
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("A user logged in to the system", () => {
  cy.login(user.email, user.password);
});

Given("The system has an article created by that user", () => {
  sharedDataUtils
    .createArticle(article)
    .then((articleResult) => (articleSlug = articleResult.slug));
});

Given("The user was on the Article page", () => {
  articlePageActions.openArticlePage(articleSlug);
  cy.wait(["@user"]);
});

When("The user clicks on the Edit Article button", () => {
  articlePageActions.clickOnEditArticleLink();
});

Then("The Edit page for this article should be appear", () => {
  newArticlePageAssertions.checkTitleContent(article.title, true);
});

Given("The user was on the Edit Article page", () => {
  articlePageActions.openEditorArticlePage(articleSlug);
});

When("The user adds a new valid title", () => {
  newArticlePageActions.typeInTitleInput(newArticle.title);
});

When("The user clicks on the Publish Post button", () => {
  cy.intercept("PUT", "/api/articles").as("articles");
  newArticlePageActions.clickOnPublishAeticleButton();
  cy.wait("@articles");
});

Then("The Article page should be appear", () => {
  sharedDataUtils.getActicleByTitle(newArticle.title).then((articleResult) => {
    sharedAssertions.checkUrlContainsValue(
      `#/article/${articleResult.slug}`,
      true
    );
  });
});

Then("The new title should be shown on the Article page", () => {
  newArticlePageAssertions.checkTitleContent(newArticle.title);
});

Then("The system has already another article created by that user", () => {
  sharedDataUtils.createArticle(newArticleForinvalidTitle);
});

Then("The user adds a title that already exists title", () => {
  newArticlePageActions.typeInTitleInput(newArticleForinvalidTitle.title);
});

Then("An alert should be appear {string}", (alertContent: string) => {
  newArticlePageAssertions.hasErrorContainsValue(alertContent);
});

When("The user remove title", () => {
  newArticlePageActions.typeInTitleInput();
});

Then("The alert should be appear {string}", (alertContent: string) => {
  newArticlePageAssertions.hasErrorContainsValue(alertContent);
});

When("The user fills a new about", () => {
  newArticlePageActions.typeInAboutInput(newArticle.description);
});

Then("The Article page, should be appear", () => {
  sharedAssertions.checkUrlContainsValue(`#/article/${articleSlug}`, true);
});

When("The user remove about", () => {
  newArticlePageActions.typeInAboutInput();
});

Then("The alert for about input should be appear {string}", (about: string) => {
  newArticlePageAssertions.hasErrorContainsValue(about);
});

When("The user fills a new article body", () => {
  newArticlePageActions.typeInArticleInput(newArticle.body);
});

Then("The article body should be shown on the Article page", () => {
  newArticlePageAssertions.checkArticleContent(newArticle.body);
});

When("The user remove article body", () => {
  newArticlePageActions.typeInArticleInput();
});

Then("An alert for body input should be appear {string}", (body: string) => {
  newArticlePageAssertions.hasErrorContainsValue(body);
});

When("The user fills a new tag", () => {
  newArticlePageActions.typeInTagsInput(
    newArticle.tagList.map((tag) => `${tag}{enter}`)
  );
});

Then("The tag should be shown on the Article page", () => {
  newArticlePageAssertions.checkTagsInputContainsValue(newArticle.tagList);
});

When("The user remove all tag", () => {
  newArticlePageActions.removeAllTags(article.tagList);
});

Then("The tags should not be shown on the Article page", () => {
  newArticlePageAssertions.checkTagsInputContainsValue(article.tagList, false);
});

When("The user remove a tag", () => {
  newArticlePageActions.removeTag();
});

Then("The tag should not be shown on the Article page", () => {
  newArticlePageAssertions.checkTagsInputContainsValue(
    [article.tagList[0]],
    false
  );
});

When("The user fills in a new about", () => {
  newArticlePageActions.typeInAboutInput(newArticle.description);
});

Then("The about only should be changed on the Edit page", () => {
  articlePageActions.openEditorArticlePage(articleSlug);
  newArticlePageAssertions
    .checkTitleInputContainsValue(article.title)
    .checkAboutInputContainsValue(newArticle.description)
    .checkArticleInputContainsValue(article.body)
    .checkTagsInputContainsValue(article.tagList);
});

When("The user fills in a new article body", () => {
  newArticlePageActions.typeInArticleInput(newArticle.body);
});

Then("The article body only should be changed on the Edit page", () => {
  articlePageActions.openEditorArticlePage(articleSlug);
  newArticlePageAssertions
    .checkTitleInputContainsValue(article.title)
    .checkAboutInputContainsValue(article.description)
    .checkArticleInputContainsValue(newArticle.body)
    .checkTagsInputContainsValue(article.tagList);
});

When("The user fills in new tags", () => {
  newArticlePageActions.typeInTagsInput(
    newArticle.tagList.map((tag) => `${tag}{enter}`)
  );
});

Then("The tags only should be changed on the Edit page", () => {
  articlePageActions.openEditorArticlePage(articleSlug);
  newArticlePageAssertions
    .checkTitleInputContainsValue(article.title)
    .checkAboutInputContainsValue(article.description)
    .checkArticleInputContainsValue(article.body)
    .checkTagsInputContainsValue(article.tagList)
    .checkTagsInputContainsValue(newArticle.tagList);
});

Then("The title only should be changed on the Edit page", () => {
  sharedDataUtils.getActicleByTitle(newArticle.title).then((articleResult) => {
    articlePageActions.openEditorArticlePage(articleResult.slug);
  });
  newArticlePageAssertions
    .checkArticleInputContainsValue(article.body)
    .checkAboutInputContainsValue(article.description)
    .checkTitleInputContainsValue(newArticle.title)
    .checkTagsInputContainsValue(article.tagList);
});

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
  sharedDataUtils.deleteArticleByTitle(newArticle.title);
  sharedDataUtils.deleteArticleByTitle(newArticleForinvalidTitle.title);
});
