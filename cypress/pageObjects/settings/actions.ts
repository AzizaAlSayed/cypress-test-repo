class SettingsPageActions {
  openSettingsPage() {
    cy.visit("#/settings");
    return this;
  }

  clickOnLogout() {
    cy.get("button").last().click();
    return this;
  }
}

export default SettingsPageActions;
