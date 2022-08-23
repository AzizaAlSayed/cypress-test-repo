class ProfilePageAssertions {
  checkingExistingPost(title: string, isContain = true) {
    cy.get(".feed-toggle").find(".nav").children().eq(1).click();
    cy.get("h1")
      .first()
      .should(isContain ? "not.contain" : "contain", title);
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
