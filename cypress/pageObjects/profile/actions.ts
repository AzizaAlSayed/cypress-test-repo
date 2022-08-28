class ProfilePageActions {
  openFavoritedTab() {
    cy.get(".nav-pills").children().eq(1).click();
    return this;
  }

  clickOnFavorite() {
    cy.get("favorite-btn").eq(0).click();
    return this;
  }
}

export default ProfilePageActions;
