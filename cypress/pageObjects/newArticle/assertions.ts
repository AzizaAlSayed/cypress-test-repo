class NewArticlePageAssertions {
  checkTitleContent(title: string, isContain = true) {
    cy.get("h1").should(isContain ? "contain" : "not.contain", title);
    return this;
  }

  checkTagsInputContainsValue(tags: string[], isContain = true) {
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
  }

  hasErrorContainsValue(alert: string, isContain = true) {
    cy.get("li.ng-binding.ng-scope").should(
      isContain ? "contain" : "note.contain",
      alert
    );
    return this;
  }

  checkTitleInputContainsValue(title: string, isContain = true) {
    cy.get("input[type=text]")
      .eq(0)
      .should(isContain ? "have.value" : "note.have.value", title);
    return this;
  }

  checkAboutInputContainsValue(about: string, isContain = true) {
    cy.get("input[type=text]")
      .eq(1)
      .should(isContain ? "have.value" : "note.have.value", about);
    return this;
  }

  checkArticleInputContainsValue(article: string, isContain = true) {
    cy.get("textarea").should(
      isContain ? "have.value" : "note.have.value",
      article
    );
    return this;
  }
}

export default NewArticlePageAssertions;
