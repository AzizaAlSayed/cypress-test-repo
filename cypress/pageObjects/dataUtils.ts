import { createArticleBody, createUserBody } from "@support/constants";
import {
  Article,
  NewArticleResponseBody,
  NewUser,
  NewUserResponseBody,
} from "@support/types";

class SharedDataUtils {
  createUser(user: NewUser): Cypress.Chainable<NewUserResponseBody> {
    return cy
      .request(
        "POST",
        "https://api.realworld.io/api/users",
        createUserBody(user)
      )
      .then((userResult) => {
        return userResult.body.user;
      });
  }

  createArticle(article: Article): Cypress.Chainable<NewArticleResponseBody> {
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
  }
}

export default SharedDataUtils;
