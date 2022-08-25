import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import ProfileActions from "@pageObjects/profile/actions";
import ProfilePageAssertion from "@pageObjects/profile/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const profileActions = new ProfileActions();
const homePageActions = new HomePageActions();
const profileAssertion = new ProfilePageAssertion();

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

let articleSlug: string;

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

Given("The system has a favorited article", () => {
  sharedDataUtils
    .createArticle(article)
    .then((articleResult) =>
      sharedDataUtils.favoriteArticle(articleResult.slug)
    );
});

Given("The user opened the Favorited tab from their profile page", () => {
  homePageActions.openProfilePage(user.username);
  profileActions.openFavoritedTab();
});

When("The user clicks on unfavorite button", () => {
  profileActions.clickOnFavorite();
});

Then(
  "The article counter favorite should be equal to zero in the Favorited tab",
  () => {
    profileAssertion.checkArticleNumberFavoritesInFavoritedTab("0");
  }
);

Then(
  "The article counter favorite should be equal to zero in the Articles tab",
  () => {
    homePageActions.openProfilePage(user.username);
    profileAssertion.checkArticleNumberFavoritesInArticlesTab("0");
  }
);

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});
