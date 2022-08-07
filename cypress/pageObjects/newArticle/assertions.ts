class NewArticlePageAssertions {
  checkingTheArticlePage() {
    cy.url().should("contains", "article");
    return this;
  }

  checkTitleContent(title: string, isContain = true) {
    cy.get("h1").should(isContain ? "contain" : "not.contain", title);
    return this;
  }

  checkTagsContent(tags: string[], isContain = true) {
    tags.filter((tag) =>
      cy.get(".tag-list").should(isContain ? "contain" : "not.contain", tag)
    );
    return this;
  }

  checkingArticleContent(articleContent: string) {
    cy.get("div[ng-bind-html='::$ctrl.article.body']").should(
      "contain",
      articleContent
    );
    return this;
  }

  checkingCommintArea() {
    cy.get("textarea").should("be.empty");
    return this;
  }

  checkingDeleteArticle() {
    cy.get("span.ng-scope").find("button").should("contain", " Delete Article");
    return this;
  }

  hasErrorContainsValue(alert: string, isContain = true) {
    cy.get("div.ng-scope").should(
      isContain ? "have.value" : "note.have.value",
      alert
    );
    return this;
  }

  checkEditedTitleContainsValue(title: string, isContain = true) {
    cy.get("input[type=text]")
      .eq(0)
      .should(isContain ? "have.value" : "note.have.value", title);
    return this;
  }

  checkEditedAboutContainsValue(about: string, isContain = true) {
    cy.get("input[type=text]")
      .eq(1)
      .should(isContain ? "have.value" : "note.have.value", about);
    return this;
  }

  checkEditedArticleContainsValue(article: string, isContain = true) {
    cy.get("textarea").should(
      isContain ? "have.value" : "note.have.value",
      article
    );
    return this;
  }
}

export default NewArticlePageAssertions;
