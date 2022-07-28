class ArticleActions {
  openProfile(username: string) {
    cy.intercept("GET", "/api/user").as("user");
    cy.visit(`#/@${username}`);
    cy.wait("@user");
    return this;
  }

  openFavoritedTab() {
    cy.get(".nav-pills").children().eq(1).click();
    return this;
  }

  makeArticleFavorite() {
    cy.get("favorite-btn").eq(0).click();
    return this;
  }
}

export default ArticleActions;
