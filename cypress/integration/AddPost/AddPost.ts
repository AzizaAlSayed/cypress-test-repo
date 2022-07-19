import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AddPostConduit } from "@pageObjects/AddPostConduit";

const addPost = new AddPostConduit();

Given("The user opened the New Article page", () => {
  addPost.navigate();
});
When("The user fills in the title field with {string}", (title: string) => {
  addPost.addTitle(title);
});
When("The user fills in the about field {string}", (about: string) => {
  addPost.addAbout(about);
});
When(
  "The user fills in the article field with {string}",
  (articleContent: string) => {
    addPost.addArticle(articleContent);
  }
);
When("The user fills in the tags field with {string}", (tags: string) => {
  addPost.addTags(tags);
});
When("The user clicks on Publish Article button", () => {
  addPost.clickPublish();
});
Then("The article name should be shown in the URL", () => {
  addPost.checkingTheArticlePage();
});
