class HomePageActions {
  openSignInPage() {
    cy.visit("#/login");
    return this;
  }

  openSignUpPage() {
    cy.visit("#/register");
    return this;
  }

  openSettingsPage() {
    cy.visit("#/settings");
    return this;
  }

  openNewArticlePage() {
    cy.visit("#/editor/");
    return this;
  }

  openProfilePage(username: string) {
    cy.intercept("GET", "/api/user").as("user");
    cy.visit(`#/@${username}`);
    cy.wait("@user");
    return this;
  }

  openAuthourProfilePage(username: string) {
    cy.visit(`#/@${username}`);
    return this;
  }

  openHomePage() {
    cy.visit("http://demo.realworld.io/#/");
    return this;
  }

  clickOnSignInLink() {
    cy.get("a[href='#/login']").eq(0).click();
    return this;
  }

  clickOnSignUpLink() {
    cy.get("a[href='#/register']").eq(0).click();
    return this;
  }

  clickOnConduitLogo() {
    cy.get("a[href='#/']").eq(0).click();
    return this;
  }

  clickOnHomeLink() {
    cy.get("a[href='#/']").eq(1).click({ force: true });
    return this;
  }

  clickOnNewArticleLink() {
    cy.get("a[href='#/editor/']").click();
    return this;
  }

  clickOnSettingsLink() {
    cy.get("a[href='#/settings']").click();
    return this;
  }

  clickOnUserProfile(username: string) {
    cy.get("a[href='#/@" + `${username}` + "']").click();
    return this;
  }

  clickOnYourFeedTab() {
    cy.get(".feed-toggle").find(".nav").children().eq(0).click();
    return this;
  }

  clickOnGlobaleFeedTab() {
    cy.get(".feed-toggle").find(".nav").children().eq(1).click();
    return this;
  }

  clickOnTag() {
    cy.get(".sidebar").find(".tag-list").children().eq(0).click();
    return this;
  }

  clickOnArticleTitleLink() {
    cy.get("h1").eq(1).click();
    return this;
  }
}

export default HomePageActions;
