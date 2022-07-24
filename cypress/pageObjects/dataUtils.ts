import { createUserBody } from "@support/constants";
import {
  NewArticle,
  NewArticleResponseBody,
  NewUser,
  NewUserResponseBody,
} from "@support/types";

class SharedDataUtils {
  createUser(user: NewUser): Cypress.Chainable<NewUserResponseBody> {
    return cy
      .request(
        "POSt",
        "https://api.realworld.io/api/users",
        createUserBody(user)
      )
      .then((userResult) => userResult.body.user);
  }

  createArticle(
    article: NewArticle
  ): Cypress.Chainable<NewArticleResponseBody> {
    return cy
      .request("POSt", "https://api.realworld.io/api/articles", article)
      .then((userResult) => userResult.body.article);
  }
}

export default SharedDataUtils;
