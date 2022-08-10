class SettingsPageAssertions {
  checkHoemPageIsOpen() {
    cy.url().should("equal", "http://demo.realworld.io/#/");
    return this;
  }
}

export default SettingsPageAssertions;
