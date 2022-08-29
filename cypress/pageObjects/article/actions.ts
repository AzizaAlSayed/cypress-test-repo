class ArticlePageActions {
  openArticlePage(articleSlug: string) {
    cy.intercept("GET", "/api/user").as("user");
    cy.intercept("GET", "/api/articles/**").as("articles");
    cy.visit(`#/article/${articleSlug}`);
    cy.wait("@articles");
    return this;
  }

  openEditorArticlePage(articleSlug: string) {
    cy.visit(`#/editor/${articleSlug}`);
  }

  typeInCommentInput(comment: string) {
    cy.get("textarea").type(comment);
    return this;
  }

  clickOnDeleteCommentButton() {
    cy.get("i[ng-click='$ctrl.deleteCb()']").click();
    return this;
  }

  clickOnPostCommentButton() {
    cy.get("button[type=submit]").click();
    return this;
  }

  clickOnPostLink() {
    cy.get("h1").first().click();
    return this;
  }

  clickOnDeleteArticleButton() {
    cy.intercept("GET", "/api/articles/**").as("articles");
    cy.get("button[ng-click='$ctrl.deleteArticle()']").first().click();
    cy.wait(["@articles"]);
    return this;
  }

  clickOnEditArticleLink() {
    cy.get("a[class='btn btn-outline-secondary btn-sm']").first().click();
    return this;
  }

  clickOnSigninLink() {
    cy.get("a[ui-sref='app.login']").eq(1).click();
  }

  clickOnSignupLink() {
    cy.get("a[ui-sref='app.register']").eq(1).click();
  }
}

export default ArticlePageActions;
