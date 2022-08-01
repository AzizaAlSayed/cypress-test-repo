class ProfilePageAssertions {
  checkingExistingPost(title: string) {
    cy.get(".feed-toggle").find(".nav").children().eq(1).click();
    cy.get("h1").first().should("not.contain", title);
    return this;
  }
  checkingArticleNumberFavoritesInArticlesTab(counter: string) {
    cy.get("ng-transclude ").find(".ng-binding").should("contain", counter);
    return this;
  }

  checkingArticleNumberFavoritesInFavoritedTab(counter: string) {
    cy.get("ng-transclude ").find(".ng-binding").should("contain", counter);
    return this;
  }
}

export default ProfilePageAssertions;
