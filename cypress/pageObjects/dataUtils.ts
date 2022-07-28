import { createUserBody } from "@support/constants";
import {
  ArticleResponseBody,
  Articles,
  NewUser,
  NewUserResponseBody,
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

  getAllActiclesByAuthor = (author: string): Cypress.Chainable<Articles> => {
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
    ).then(
      (allArticles) =>
        allArticles.articles.filter((article) => article.title === title)[0] ||
        null
    );
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
}

export default SharedDataUtils;
