import ArticlePageActions from "@pageObjects/article/actions";
import SharedDataUtils from "@pageObjects/dataUtils";
import SharedAssertions from "@pageObjects/sharedAssertions";
import HomePageActions from "@pageObjects/home/actions";
import HomePageAssertions from "@pageObjects/home/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageActions = new HomePageActions();
const homePageAssertions = new HomePageAssertions();
const sharedDataUtils = new SharedDataUtils();
const sharedAssertions = new SharedAssertions();
const articlePageActions = new ArticlePageActions();

const user: NewUser = {
  username: "ConduitUser",
  email: "conduituser@email.com",
  password: "123456",
};

const authorPost: NewUser = {
  username: "ConduitAuthorUser",
  email: "conduitauthoruser@email.com",
  password: "123456",
};

const article: NewArticle = {
  title: "this is a conduit title post",
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

Given("A user was at the Sigin up page", () => {
  homePageActions.openSignUpPage();
});

Given("A user was at the Sigin in page", () => {
  homePageActions.openSignInPage();
});

Given("A user was at the Home page", () => {
  homePageActions.openHomePage();
});

Given("A user logged in with an existing account", () => {
  cy.login(user.email, user.password);
});

Given("Another user logged in with an existing account", () => {
  cy.login(user.email, user.password);
});

Given("The second user was on an article page", () => {
  articlePageActions.openArticlePage(articleSlug);
  cy.wait(["@user"]);
});

Given("The user was at the Home page", () => {
  homePageActions.openHomePage();
});

Given("The user was at the New Article page", () => {
  homePageActions.openNewArticlePage();
});

Given("The user was at the Settings page", () => {
  homePageActions.openSettingsPage();
});

Given("The user was at the User Profile page", () => {
  homePageActions.openProfilePage(user.username);
});

Given("A user created an article page", () => {
  cy.login(authorPost.email, authorPost.password).then(() => {
    sharedDataUtils.createArticle(article).then((articleResult) => {
      articleSlug = articleResult.slug;
    });
  });
  cy.logout();
});

Given("Another user was on the article page", () => {
  articlePageActions.openArticlePage(articleSlug);
});

Given("A user was at the author profile", () => {
  homePageActions.openAuthourProfilePage(authorPost.username);
});

Given("The user was at the author profile", () => {
  homePageActions.openAuthourProfilePage(authorPost.username);
});

When("The user clicks on sign in on the navigation bar", () => {
  homePageActions.clickOnSignInLink();
});

When("The user clicks on home on the navigation bar", () => {
  homePageActions.clickOnHomeLink();
});

When("The user clicks on sign up on the navigation bar", () => {
  homePageActions.clickOnSignUpLink();
});

When("The user clicks on new article on the navigation bar", () => {
  homePageActions.clickOnNewArticleLink();
});

When("The user clicks on settings on the navigation bar", () => {
  homePageActions.clickOnSettingsLink();
});

When("The user clicks on username on the navigation bar", () => {
  homePageActions.clickOnUserProfile(user.username);
});

When("The user clicks on Conduit logo", () => {
  homePageActions.clickOnConduitLogo();
});

Then("The Sign in page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/login", true);
});

Then("The home page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/", true);
});

Then("The Sign up page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/register", true);
});

Then("The New Articles page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/editor/", true);
});

Then("The Settings page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/settings", true);
});

Then("The User Profile page should be appear", () => {
  sharedAssertions.checkUrlContainsValue(`#/@${user.username}`, true);
});

Then("The Home page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/", true);
});
