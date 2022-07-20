class FavoritePostsAssertions {
  checkingNavigation(tab: string) {
    let articlesURl = "http://demo.realworld.io/#/@larissa77",
      FavoritesURl = "http://demo.realworld.io/#/@larissa77/favorites",
      url = "";
    tab && tab === "My Articles" ? (url = articlesURl) : (url = FavoritesURl);
    cy.url().should("equal", url);
    return this;
  }
  checkingFirstArticleFavoriteContint(counter: string) {
    cy.get("favorite-btn")
      .eq(0)
      .should("be.visible")
      .find(".btn-primary")
      .should("contain", counter);
    return this;
  }
}
export default FavoritePostsAssertions;
