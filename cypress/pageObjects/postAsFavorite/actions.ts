class postAsFavoriteActions {
  openProfile() {
    cy.visit("http://demo.realworld.io/#/@larissa77");
    return this;
  }

  navigationToArticlesTabs(tabName: string) {
    let tabNumber = 0;
    tabName && tabName === "My Articles" ? tabNumber : (tabNumber = 1);
    cy.get(".nav-pills").children().eq(tabNumber).should("be.visible").click();
    return this;
  }

  makeFirstArticleFavorite() {
    cy.get("favorite-btn").eq(0).should("be.visible").click();
    return this;
  }

  makeUnfirstArticleFavorite() {
    cy.get("favorite-btn", { timeout: 6000 })
      .eq(0)
      .should("be.visible")
      .click();
    return this;
  }

  refreshPage() {
    cy.reload();
    return this;
  }
}

export default postAsFavoriteActions;
