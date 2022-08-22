import ArticlePageActions from "@pageObjects/article/actions";
import AuthorProfilePageActions from "@pageObjects/authorProfile/actions";
import AuthorProfilePageAssertions from "@pageObjects/authorProfile/assertions";
import SharedDataUtils from "@pageObjects/dataUtils";
import ProfilePageActions from "@pageObjects/profile/actions";
import SignUpPageAssertions from "@pageObjects/signup/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const articlePageActions = new ArticlePageActions();
const sharedDataUtils = new SharedDataUtils();
const signUpPageAssertions = new SignUpPageAssertions();
const authorProfilePageAssertions = new AuthorProfilePageAssertions();
const authorProfilePageActions = new AuthorProfilePageActions();
const profilePageActions = new ProfilePageActions();

const authorPost: NewUser = {
  username: "ConduitAuthorPost",
  email: "conduitauthor@email.com",
  password: "123456",
};

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
  password: "123456",
};

const article: NewArticle = {
  title: "This is a conduit title post",
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

let articleSlug: string;

beforeEach(() => {
  sharedDataUtils.createUser(authorPost).then((userResult) => {
    authorPost.username = userResult.username;
    authorPost.email = userResult.email;
  });
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("The system has an article created by that user", () => {
  cy.login(authorPost.email, authorPost.password).then(() => {
    sharedDataUtils.createArticle(article).then((articleResult) => {
      articleSlug = articleResult.slug;
    });
  });
  cy.logout();
});

Given("A user was on the article page", () => {
  articlePageActions.openArticlePage(articleSlug);
});

Given("The user was on the article page", () => {
  articlePageActions.openArticlePage(articleSlug);
  cy.wait("@user");
});

Given("A user logged in with an exisiting account", () => {
  cy.login(user.email, user.password);
});

Given("The user was on the author profile", () => {
  profilePageActions.openProfile(authorPost.username);
  cy.wait("@user");
});

Given("A user was on the author profile", () => {
  profilePageActions.openProfile(authorPost.username);
});

When("The user clicks on follow author button", () => {
  authorProfilePageActions.clickOnfollowAuthorFromArticlePage();
});

When("The user clicks on follow button", () => {
  authorProfilePageActions.clickOnfollowAuthorFromAuthorPage();
});

Then("The Sign up page should be appear", () => {
  signUpPageAssertions.checkSignupURL();
});

Then(
  "The Follow author button should be toggled to Unfollow author button",
  () => {
    authorProfilePageAssertions.checkOnfollowingAuthorFromArticlePage();
  }
);

Then("The Follow author button should be toggled to Unfollow button", () => {
  authorProfilePageAssertions.checkOnfollowingAuthorFromAuthorPage();
});

Then("The Sign up page should be appear", () => {
  signUpPageAssertions.checkSignupURL();
});
