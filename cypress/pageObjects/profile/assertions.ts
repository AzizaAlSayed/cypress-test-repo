class ProfileAssertion {
  checkingArticleNumberFavoritesInArticlesTab(counter: string) {
    cy.get("ng-transclude ").find(".ng-binding").should("contain", counter);
    return this;
  }

  checkingArticleNumberFavoritesInFavoritedTab(counter: string) {
    cy.get("favorite-btn")
      .eq(0)
      .find(".btn-primary")
      .should("contain", counter);
    return this;
  }

  openProfile(username: string) {
    cy.url.should("contain", `#/@${username}`);

    return this;
  }
}
export default ProfileAssertion;
