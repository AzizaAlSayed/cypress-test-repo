import FavoritePostsActions from "@pageObjects/postAsFavorite/actions";
import FavoritePostsAssertions from "@pageObjects/postAsFavorite/assertions";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const favoritePostsActions = new FavoritePostsActions();
const favoritePostsAssertions = new FavoritePostsAssertions();

Given("The user clicked the profile page", () => {
  favoritePostsActions.openProfile();
});
When("The user clicks on the Favorite button to the first article", () => {
  favoritePostsActions.makeFirstArticleFavorite();
});
When("The user clicks on the {string} tab", (tabName: string) => {
  favoritePostsActions.navigationToArticlesTabs(tabName);
});
When("The user clicks on the unfavorite button to the first article", () => {
  favoritePostsActions.makeUnfirstArticleFavorite();
});
Then("The Favorite Articles section should refresh", () => {
  favoritePostsActions.refreshPage();
});
Then("The article should not appear in the Favorite Articles section", () => {
  favoritePostsAssertions.checkingFirstArticleFavoriteContint("1");
});
Then("The article should appear in the {string} section", (tabName: string) => {
  favoritePostsActions.navigationToArticlesTabs(tabName);
  favoritePostsAssertions.checkingFirstArticleFavoriteContint("0");
});
