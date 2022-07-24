class DeleteArticleActions {
  openArticlePage(url: string) {
    cy.visit(url);
    return this;
  }

  clickOnThePost() {
    cy.get("h1").first().click();
    return this;
  }

  clickOnDeleteArticle() {
    cy.get("button[ng-click='$ctrl.deleteArticle()']").first().click();
    cy.wait(5000);
    return this;
  }
}

export default DeleteArticleActions;
