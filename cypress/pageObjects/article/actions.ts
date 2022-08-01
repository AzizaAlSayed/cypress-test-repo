class ArticlePageActions {
  openArticlePage(articleSlug: string) {
    cy.intercept("GET", "/api/user").as("user");
    cy.intercept("GET", "/api/articles/**").as("articles");
    cy.visit(`#/article/${articleSlug}`);
    cy.wait(["@user", "@articles"]);
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
}

export default ArticlePageActions;
