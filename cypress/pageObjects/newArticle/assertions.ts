class NewArticlePageAssertions {
  checkingTheArticlePage() {
    cy.url().should("contains", "article");
    return this;
  }
}

export default NewArticlePageAssertions;
