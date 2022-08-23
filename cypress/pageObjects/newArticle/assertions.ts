class NewArticlePageAssertions {
  checkingTheArticlePage() {
    cy.url().should("contains", "article");
    return this;
  }

  checkingTitle(title: string) {
    cy.get("h1").should("contain", title);
    return this;
  }

  checkTagsContent(tags: string[], isContain = true) {
    tags.filter((tag) =>
      cy.get(".tag-list").should(isContain ? "contain" : "not.contain", tag)
    );
    return this;
  }

  checkArticleContent(articleContent: string, isContain = true) {
    cy.get("div[ng-bind-html='::$ctrl.article.body']").should(
      isContain ? "contain" : "not.contain",
      articleContent
    );
    return this;
  }

  checkCommentAreaContent(isContain = false) {
    cy.get("textarea").should(isContain ? "not.be.empty" : "be.empty");
    return this;
  }

  checkDeleteArticle(isContain = true) {
    cy.get("span.ng-scope")
      .find("button")
      .should(isContain ? "contain" : "not.contain", " Delete Article");
    return this;
  }
}

export default NewArticlePageAssertions;
