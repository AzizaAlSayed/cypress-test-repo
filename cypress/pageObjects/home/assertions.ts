class HomePageAssertions {
  checkSingInPageIsOpen() {
    cy.url().should("contain", "#/login");
    return this;
  }

  checkSingUpPageIsOpen() {
    cy.url().should("contain", "#/register");
    return this;
  }

  checkHomePageIsOpen() {
    cy.url().should("equal", "http://demo.realworld.io/#/");
    return this;
  }

  checkUserProfilePageIsOpening(username: string) {
    cy.url().should("contain", `#/@${username}`);
    return this;
  }

  checkSettingsPageIsOpen() {
    cy.url().should("contain", "#/settings");
    return this;
  }

  checkNewArticlePageIsOpen() {
    cy.url().should("contain", "#/editor/");
    return this;
  }

  checkIsActivatedFeedTab(isContain = true) {
    cy.get(".nav-link").should(
      isContain ? "have.class" : "not.have.class",
      "active"
    );
    return this;
  }

  checkIsActivatedGlobalFeedTab(isContain = true) {
    cy.get(".nav-link")
      .last()
      .should(isContain ? "have.class" : "not.have.class", "active");
    return this;
  }

  checkIsActivatedTagTab(isContain = true) {
    cy.get(".nav-link")
      .last()
      .should(isContain ? "have.class" : "not.have.class", "active");
    return this;
  }

  checkAriclesExistence(isContain = true) {
    expect(
      cy
        .get("h1")
        .eq(1)
        .should(isContain ? "exist" : "not.exist")
    );
    return this;
  }

  checkErrorMassage(content: string) {
    cy.get('[ng-show="!$ctrl.loading && !$ctrl.list.length"]').should(
      "contain",
      content
    );
    return this;
  }

  checkTagTabExistence(isContain = true) {
    cy.get(".feed-toggle")
      .find(".nav")
      .children()
      .eq(2)
      .should(isContain ? "have.class" : "not.have.class", "ng-hide");
    return this;
  }

  checkArticlesRelatedToTag(isContain = true) {
    cy.get(".feed-toggle")
      .find(".nav")
      .children()
      .eq(2)
      .should(isContain ? "have.class" : "not.have.class", "ng-hide");
    return this;
  }

  checkTitleValueAtTag(title: string, tag: string, isContain: boolean) {
    cy.intercept(
      "GET",
      `https://api.realworld.io/api/articles?limit=10&offset=0&tag=${tag}`
    ).as("articles");
    cy.wait(["@articles"]);
    cy.get("h1[ng-bind='$ctrl.article.title']")
      .eq(0)
      .should(isContain ? "contain" : "not.contain", title);
    return this;
  }
}

export default HomePageAssertions;
