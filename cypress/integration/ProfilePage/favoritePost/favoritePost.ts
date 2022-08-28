import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import ProfilePageActions from "@pageObjects/profile/actions";
import ProfilePageAssertion from "@pageObjects/profile/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const homePageActions = new HomePageActions();
const profilePageActions = new ProfilePageActions();
const profilePageAssertion = new ProfilePageAssertion();

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
  password: "123456",
};

const article: NewArticle = {
  title: "Conduit title post",
  body: "Conduit title body",
  description: "tConduit title description",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

beforeEach(() => {
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("A user logged in with an existing account", () => {
  cy.login(user.email, user.password).then(() => {
    sharedDataUtils.deleteArticleByTitle(article.title);
  });
});

Given("The user created an article", () => {
  sharedDataUtils.createArticle(article);
});

Given("The user opened their profile page", () => {
  homePageActions.openProfilePage(user.username);
  cy.wait("@user");
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

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});
