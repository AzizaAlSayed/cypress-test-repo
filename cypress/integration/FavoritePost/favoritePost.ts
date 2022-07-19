import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { FavoritePostsConduit } from "@pageObjects/FavoritePostConduit";

const foviretPost = new FavoritePostsConduit();

Given("The user clicked the profile page", () => {
  foviretPost.openProfile();
});
When("The user clicks on the Favorite button to the first article", () => {
  foviretPost.makeFirstArticleFavorite();
});
When("The user clicks on the {string} tab", (tabName: string) => {
  foviretPost.navigationToArticlesTabs(tabName);
});
When("The user clicks on the unfavorite button to the first article", () => {
  foviretPost.makeUnfirstArticleFavorite();
});
Then("The Favorite Articles section should refresh", () => {
  foviretPost.refreshPage();
});
Then("The article should not appear in the Favorite Articles section", () => {
  foviretPost.checkingFirstArticleFavoriteContint("1");
});
Then("The article should appear in the {string} section", (tabName: string) => {
  foviretPost.navigationToArticlesTabs(tabName);
  foviretPost.checkingFirstArticleFavoriteContint("0");
});
