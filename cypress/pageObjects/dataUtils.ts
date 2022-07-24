import { createArticleBody } from "@support/constants";
import { NewArticle, NewArticleResponseBody } from "@support/types";

class SharedDataUtils {
  createArticle(
    article: NewArticle
  ): Cypress.Chainable<NewArticleResponseBody> {
    return cy
      .request(
        "POSt",
        "https://api.realworld.io/api/articles",
        createArticleBody(article)
      )
      .then((ArtilceResult) => ArtilceResult.body.article);
  }
}

export default SharedDataUtils;
