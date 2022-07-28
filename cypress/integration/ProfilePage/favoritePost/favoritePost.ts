import SharedDataUtils from "@pageObjects/dataUtils";
import ProfileActions from "@pageObjects/profile/actions";
import ProfileAssertion from "@pageObjects/profile/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const profileActions = new ProfileActions();
const profileAssertion = new ProfileAssertion();

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

Given("The user made an article created", () => {
  sharedDataUtils.createArticle(article);
});

Given("The user opened their profile page", () => {
  profileActions.openProfile(user.username);
});

When("The user clicks on favorite button", () => {
  profileActions.makeArticleFavorite();
});

Then(
  "The article counter favorite should be equal to one in the Articles tab",
  () => {
    profileAssertion.checkingArticleNumberFavoritesInArticlesTab("1");
  }
);

Then(
  "The article counter favorite should be equal to one in the Favorited tab",
  () => {
    profileActions.openFavoritedTab();
    profileAssertion.checkingArticleNumberFavoritesInFavoritedTab("1");
  }
);

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});
