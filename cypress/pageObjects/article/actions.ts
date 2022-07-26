class ArticleActions {
  openArticlePage(url: string) {
    cy.intercept("GET", "/api/profiles/**").as("profiles");
    cy.intercept("GET", "/api/user").as("user");
    cy.intercept("GET", "/api/articles**").as("articles");
    cy.visit(url);
    cy.wait(["@profiles", "@user", "@articles"]);
    return this;
  }

  clickOnThePost() {
    cy.get("h1").first().click();
    return this;
  }

  clickOnDeleteArticle() {
    cy.get("button[ng-click='$ctrl.deleteArticle()']").first().click();
    cy.wait(["@articles"]);
    return this;
  }
}

export default ArticleActions;
