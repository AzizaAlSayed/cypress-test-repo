class ArticlePageAssertions {
  checkCommentContent(comment: string, isContain = true) {
    cy.get(".card-text").should(
      isContain ? "contain" : "not.contains",
      comment
    );
    return this;
  }

  checkCommentExisting(isExiste = false) {
    cy.get("comment").should(isExiste ? "exist" : "not.exist");
    return this;
  }

  checkArticlePageExistence(slug: string) {
    cy.url().should("contains", `#/article/${slug}`);
    return this;
  }
}

export default ArticlePageAssertions;
