class ProfilePageAssertions {
  checkExistingPost(title: string, isContain = false) {
    cy.get(".feed-toggle").find(".nav").children().eq(1).click();
    cy.get("h1")
      .first()
      .should(isContain ? "not.contain" : "contain", title);
    return this;
  }
  checkArticleNumberFavoritesInArticlesTab(counter: string) {
    cy.get("ng-transclude").find(".ng-binding").should("contain", counter);
    return this;
  }

  checkArticleNumberFavoritesInFavoritedTab(counter: string) {
    cy.get("ng-transclude").find(".ng-binding").should("contain", counter);
    return this;
  }
}

export default ProfilePageAssertions;
