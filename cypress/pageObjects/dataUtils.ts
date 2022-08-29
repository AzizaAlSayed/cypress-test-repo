import {
  createArticleBody,
  createCommentBody,
  createUserBody,
} from "@support/constants";
import {
  AllArticlesByAuthorResponse,
  ArticleResponseBody,
  Comment,
  CommentResponseBody,
  NewArticle,
  NewUser,
  NewUserResponseBody,
  Tags,
} from "@support/types";

class SharedDataUtils {
  createUser = (user: NewUser): Cypress.Chainable<NewUserResponseBody> => {
    return cy
      .request(
        "POST",
        "https://api.realworld.io/api/users",
        createUserBody(user)
      )
      .then((userResult) => userResult.body.user);
  };

  createArticle = (
    article: NewArticle
  ): Cypress.Chainable<ArticleResponseBody> => {
    return cy
      .request({
        method: "POST",
        url: "https://api.realworld.io/api/articles",
        body: createArticleBody(article),
        headers: {
          authorization: `Token ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((articleResult) => articleResult.body.article);
  };

  getAllActiclesByAuthor = (
    author: string
  ): Cypress.Chainable<AllArticlesByAuthorResponse> => {
    return cy
      .request({
        method: "GET",
        url: `https://api.realworld.io/api/articles?author=${author}`,
        headers: {
          authorization: `Token ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((authorArticlesResult) => authorArticlesResult.body);
  };

  getActicleByTitle = (
    title: string
  ): Cypress.Chainable<ArticleResponseBody> => {
    return this.getAllActiclesByAuthor(
      JSON.parse(localStorage.getItem("userInfo")).username
    ).then((allArticles) => {
      return (
        allArticles.articles.filter((article) => article.title === title)[0] ||
        null
      );
    });
  };

  deleteArticleByTitle = (articleTitle: string) => {
    this.getActicleByTitle(articleTitle).then((article) => {
      article &&
        cy.request({
          method: "DELETE",
          url: `https://conduit.productionready.io/api/articles/${article.slug}`,
          headers: {
            authorization: `Token ${localStorage.getItem("jwtToken")}`,
          },
        });
    });
  };

  favoriteArticle = (slug: string): Cypress.Chainable<ArticleResponseBody> => {
    return cy
      .request({
        method: "POST",
        url: `https://api.realworld.io/api/articles/${slug}/favorite`,
        body: slug,
        headers: {
          authorization: `Token ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((articleResult) => articleResult.body);
  };

  addComment = (
    slug: string,
    comment: Comment
  ): Cypress.Chainable<CommentResponseBody> => {
    return cy
      .request({
        method: "POST",
        url: `https://api.realworld.io/api/articles/${slug}/comments`,
        body: createCommentBody(comment),
        headers: {
          authorization: `Token ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((commentResult) => commentResult.body.comment);
  };

  getPopularTags = (): Cypress.Chainable<Tags> => {
    return cy
      .request("GET", "https://api.realworld.io/api/tags")
      .then((popularTags) => popularTags.body.tags);
  };
}
export default SharedDataUtils;
