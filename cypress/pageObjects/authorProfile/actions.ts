class AuthorProfilePageActions {
  clickingOnAuthorName() {
    cy.get(".author").first().click();
  }

  clickOnfollowAuthorFromArticlePage() {
    cy.get("button").eq(1).click();
    return this;
  }

  clickOnfollowAuthorFromAuthorPage() {
    cy.get("button").eq(0).click();
    return this;
  }
}

export default AuthorProfilePageActions;
