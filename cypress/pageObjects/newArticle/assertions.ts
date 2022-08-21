class NewArticlePageAssertions {
  checkingTitle(title: string) {
    cy.get("h1").should("contain", title);
    return this;
  }

  checkingTags(tags: string[]) {
    tags.filter((tag) => cy.get(".tag-list").should("contain", tag));
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
}

export default NewArticlePageAssertions;
