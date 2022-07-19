export class FavoritePostsConduit {
  openProfile() {
    cy.get("ul[show-authed=true]")
      .children()
      .should("be.visible")
      .eq(3)
      .and("contain", "larissa77")
      .click();
  }
  navigationToArticlesTabs(tabName: string) {
    let tabNumber = 0;
    tabName && tabName === "My Articles" ? tabNumber : (tabNumber = 1);
    cy.get(".nav-pills").children().eq(tabNumber).should("be.visible").click();
  }
  checkingNavigation(tab: string) {
    let articlesURl = "http://demo.realworld.io/#/@larissa77",
      FavoritsURl = "http://demo.realworld.io/#/@larissa77/favorites",
      url = "";
    tab && tab === "My Articles" ? (url = articlesURl) : (url = FavoritsURl);
    cy.url().should("equal", url);
  }
  checkingFirstArticleFavoriteContint(counter: string) {
    cy.get("favorite-btn")
      .eq(0)
      .should("be.visible")
      .find(".btn-primary")
      .should("contain", counter);
  }
  makeFirstArticleFavorite() {
    this.checkingNavigation("My Articles");
    cy.get("favorite-btn").eq(0).should("be.visible").click();
  }
  makeUnfirstArticleFavorite() {
    this.checkingNavigation("Favorite Articles");
    this.checkingFirstArticleFavoriteContint("1");
    cy.get("favorite-btn", { timeout: 6000 })
      .eq(0)
      .should("be.visible")
      .click();
    this.checkingFirstArticleFavoriteContint("0");
  }
  refreshPage() {
    cy.reload();
  }
}
