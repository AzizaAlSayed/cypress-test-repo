class ArticlePageActions {
  openArticlePage(articleSlug: string) {
    cy.intercept("GET", "/api/user").as("user");
    cy.intercept("GET", "/api/articles/**").as("articles");
    cy.visit(`#/article/${articleSlug}`);
    cy.wait(["@user", "@articles"]);
    return this;
  }

  openEditorArticlePage(articleSlug: string) {
    cy.visit(`#/editor/${articleSlug}`);
  }

  typeComment(comment: string) {
    cy.get("textarea").type(comment);
    return this;
  }

  clickOnDeleteComment() {
    cy.get("i[ng-click='$ctrl.deleteCb()']").click();
    return this;
  }

  clickOnPostComment() {
    cy.get("button[type=submit]").click();
    return this;
  }

  clickOnPost() {
    cy.get("h1").first().click();
    return this;
  }

  clickOnDeleteArticle() {
    cy.intercept("GET", "/api/articles/**").as("articles");
    cy.get("button[ng-click='$ctrl.deleteArticle()']").first().click();
    cy.wait(["@articles"]);
    return this;
  }

  clickOnEditArticle() {
    cy.get("a[class='btn btn-outline-secondary btn-sm']").first().click();
    return this;
  }

  clickingOnSigninLink() {
    cy.get("a[ui-sref=app.login]").first().click();
  }

  clickingOnSignupLink() {
    cy.get("a[ui-sref='app.register']").first().click();
  }
}

export default ArticlePageActions;
