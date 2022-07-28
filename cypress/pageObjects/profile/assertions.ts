class claProfilePageAssertion {
  checkingArticleNumberFavoritesInArticlesTab(counter: string) {
    cy.get("ng-transclude ").find(".ng-binding").should("contain", counter);
    return this;
  }

  checkingArticleNumberFavoritesInFavoritedTab(counter: string) {
    cy.get("ng-transclude ").find(".ng-binding").should("contain", counter);
    return this;
  }
}
export default claProfilePageAssertion;
