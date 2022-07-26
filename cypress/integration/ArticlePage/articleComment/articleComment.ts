import ArticlePageActions from "@pageObjects/article/actions";
import ArticlePageAssertions from "@pageObjects/article/assertions";
import SharedDataUtils from "@pageObjects/dataUtils";
import SharedAssertions from "@pageObjects/sharedAssertions";
import { Comment, NewArticle, NewUser } from "@support/types";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const articlePageActions = new ArticlePageActions();
const articleAssertions = new ArticlePageAssertions();
const sharedDataUtils = new SharedDataUtils();
const sharedAssertions = new SharedAssertions();

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
  title: "this is a conduit title post",
  body: "this is a conduit body post",
  description: "this is a conduit description post",
  tagList: ["conduit-tag1", "conduit-tag2"],
};

const articleComment: Comment = { body: "Cypress Conduit Comment" };
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

Given("Another user logged in with an exisiting account", () => {
  cy.login(user.email, user.password);
});

Given("A user login to the system", () => {
  cy.login(user.email, user.password);
});

Given("The system has an article created by a user", () => {
  cy.login(authorPost.email, authorPost.password).then(() => {
    sharedDataUtils.createArticle(article).then((articleResult) => {
      articleSlug = articleResult.slug;
    });
  });
  cy.logout();
});

Given("The user was at Article page", () => {
  articlePageActions.openArticlePage(articleSlug);
  cy.wait("@user");
});

Given("Another user was on that Article page", () => {
  articlePageActions.openArticlePage(articleSlug);
});

Given("The system has an article created by that user", () => {
  sharedDataUtils.createArticle(article).then((articleResult) => {
    articleSlug = articleResult.slug;
  });
});

Given("The user was at that Article page", () => {
  articlePageActions.openArticlePage(articleSlug);
  cy.wait("@user");
});

Given("The user posted a comment", () => {
  sharedDataUtils.addComment(articleSlug, articleComment);
});

When("The user clicks on the rubbish button on the post", () => {
  articlePageActions.clickOnDeleteCommentButton();
});

When("The user clicks on sign up", () => {
  articlePageActions.clickOnSignupLink();
});

When("The user clicks on sign in", () => {
  articlePageActions.clickOnSigninLink();
});

When("The user writes a comment", () => {
  articlePageActions.typeInCommentInput(articleComment.body);
});

When("The user added a comment on the article page", () => {
  articlePageActions.typeInCommentInput(articleComment.body);
  articlePageActions.clickOnPostCommentButton();
});

When("The user clicks on the Post Comment button", () => {
  articlePageActions.clickOnPostCommentButton();
});

Then("The comment should be shown on the Article page", () => {
  articleAssertions.checkCommentContent(articleComment.body);
});

Then("The Sign up page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/register", true);
});

Then("The Sign in page should be appear", () => {
  sharedAssertions.checkUrlContainsValue("#/login", true);
});

Then("The comment should be deleted", () => {
  articleAssertions.checkCommentExisting();
});

afterEach(() => {
  sharedDataUtils.deleteArticleByTitle(article.title);
});
