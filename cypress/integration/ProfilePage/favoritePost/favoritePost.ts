import ArticlePageActions from "@pageObjects/article/actions";
import SharedDataUtils from "@pageObjects/dataUtils";
import ProfilePageActions from "@pageObjects/profile/actions";
import ProfilePageAssertion from "@pageObjects/profile/assertions";
import SignUpPageAssertions from "@pageObjects/signup/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const profilePageActions = new ProfilePageActions();
const profilePageAssertion = new ProfilePageAssertion();
const articlePageActions = new ArticlePageActions();
const signUpPageAssertions = new SignUpPageAssertions();

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
  password: "123456",
};

const authorPost: NewUser = {
  username: "ConduitAuthorPost",
  email: "conduitauthor@email.com",
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
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
  sharedDataUtils.createUser(authorPost).then((userResult) => {
    authorPost.username = userResult.username;
    authorPost.email = userResult.email;
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

Given("A user logged in with an existing account", () => {
  cy.login(user.email, user.password).then(() => {
    sharedDataUtils.deleteArticleByTitle(article.title);
  });
});

Given("The user logged in with an existing account", () => {
  cy.login(user.email, user.password).then(() => {
    sharedDataUtils.deleteArticleByTitle(article.title);
  });
});

Given("The user made an article created", () => {
  sharedDataUtils.createArticle(article);
});

Given("The user opened their profile page", () => {
  profilePageActions.openProfile(user.username);
});

When("The user clicks on favorite button", () => {
  profilePageActions.clickOnFavorite();
});

Then(
  "The article counter favorite should be equal to one in the Articles tab",
  () => {
    profilePageAssertion.checkArticleNumberFavoritesInArticlesTab("1");
  }
);

Then(
  "The article counter favorite should be equal to one in the Favorited tab",
  () => {
    profilePageActions.openFavoritedTab();
    profilePageAssertion.checkArticleNumberFavoritesInFavoritedTab("1");
  }
);

Then("The Sign up page should be appear", () => {
  signUpPageAssertions.checkSignupURL();
});

/*afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});*/
