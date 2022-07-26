import ArticleActions from "@pageObjects/article/actions";
import SharedDataUtils from "@pageObjects/dataUtils";
import ProfileActions from "@pageObjects/profile/actions";
import ProfileAssertions from "@pageObjects/profile/assertions";
import { Article, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const articleActions = new ArticleActions();
const profileAssertions = new ProfileAssertions();
const profileActions = new ProfileActions();
const sharedDataUtils = new SharedDataUtils();

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
  password: "123456",
};

const article: Article = {
  title: "this is a conduit title post",
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

let articleSlug: string;

beforeEach(() => {
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("A user login to the system", () => {
  cy.login(user.email, user.password);
});

Given("The system has an article created by that user", () => {
  sharedDataUtils.createArticle(article).then((articleResult) => {
    articleSlug = articleResult.slug;
  });
});

Given("The user was at Article page", () => {
  articleActions.openArticlePage(articleSlug);
});

When("The user clicks on the Delete Article button", () => {
  articleActions.clickOnDeleteArticle();
});

Then("The post should be deleted", () => {
  profileActions.openProfilePage(`#/@${user.username}`);
  profileAssertions.checkingExistingPost(article.title);
});
