import ArticlePageActions from "@pageObjects/article/actions";
import AuthorProfilePageActions from "@pageObjects/authorProfile/actions";
import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import ProfilePageActions from "@pageObjects/profile/actions";
import ProfilePageAssertions from "@pageObjects/profile/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const articlePageActions = new ArticlePageActions();
const sharedDataUtils = new SharedDataUtils();
const profilePageActions = new ProfilePageActions();
const authorProfilePageActions = new AuthorProfilePageActions();
const homePageActions = new HomePageActions();
const profilePageAssertion = new ProfilePageAssertions();

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

Given("The system has an article created by an author", () => {
  cy.login(authorPost.email, authorPost.password).then(() => {
    sharedDataUtils.createArticle(article).then((articleResult) => {
      articleSlug = articleResult.slug;
    });
  });
  cy.logout();
});

Given("A user logged in with an exisiting account", () => {
  cy.login(user.email, user.password).then(() => {
    sharedDataUtils.deleteArticleByTitle(article.title);
  });
});

Given("The user was at the Home page", () => {
  homePageActions.openHomePage();
  profilePageActions.openFavoritedTab();
});

Given("A user was at the Home page", () => {
  homePageActions.openHomePage();
});

Given("A user was on the article page", () => {
  articlePageActions.openArticlePage(articleSlug);
});

When("The user clicks on author name", () => {
  authorProfilePageActions.clickingOnAuthorName();
});

Then("The author profile should be appear", () => {
  profilePageAssertion.checkProfileURL();
});
