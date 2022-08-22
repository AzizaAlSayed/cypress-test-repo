import ArticlePageActions from "@pageObjects/article/actions";
import SharedDataUtils from "@pageObjects/dataUtils";
import HomePageActions from "@pageObjects/home/actions";
import ProfilePageAssertions from "@pageObjects/profile/assertions";
import { NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const articlePageActions = new ArticlePageActions();
const profilePageAssertions = new ProfilePageAssertions();
const homePageActions = new HomePageActions();
const sharedDataUtils = new SharedDataUtils();

const user: NewUser = {
  username: "Conduit User",
  email: "conduituser@email.com",
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
  sharedDataUtils.createUser(user).then((userResult) => {
    user.username = userResult.username;
    user.email = userResult.email;
  });
});

Given("A user login to the system", () => {
  cy.login(user.email, user.password);
});

Given("The system has an article created by that user", () => {
  sharedDataUtils.createArticle(article).then((articleResult) => {
    articleSlug = articleResult.slug;
  });
});

Given("The user was at Article page", () => {
  articlePageActions.openArticlePage(articleSlug);
  cy.wait(["@user"]);
});

When("The user clicks on the Delete Article button", () => {
  articlePageActions.clickOnDeleteArticle();
});

Then("The post should be deleted", () => {
  homePageActions.openProfilePage(user.username);
  profilePageAssertions.checkExistingPost(article.title);
});

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});
