class SettingsPageAssertions {
  checkSettingsURL() {
    cy.url().should("contain", "#/settings");
  }
}

export default SettingsPageAssertions;
