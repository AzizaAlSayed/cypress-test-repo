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

  checkUsernameContent(username: string, isContain = true) {
    cy.get("h4").should(isContain ? "contain" : "not.contain", username);
    return this;
  }

  checkBioValue(bio: string, isContain = true) {
    cy.get("p.ng-binding").should(isContain ? "contain" : "not.contain", bio);
    return this;
  }

  checkProfilePicture(newImg: string) {
    cy.get(".user-img")
      .invoke("attr", "ng-src")
      .then((currentPicture) => {
        expect(currentPicture).to.eq(newImg);
      });
    return this;
  }
}

export default ProfilePageAssertions;
