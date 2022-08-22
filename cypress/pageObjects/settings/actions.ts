class SettingsPageActions {
  openSettingsPage() {
    cy.visit("#/settings");
    return this;
  }

  typeInImageInput(img: string) {
    cy.get("input").eq(0).clear().type(img);
    return this;
  }

  typeInUsernameInput(username: string) {
    cy.get("input").eq(1).clear().type(username);
    return this;
  }

  typeInBioInput(bio: string) {
    cy.get("textarea").clear().type(bio);
    return this;
  }

  typeInEmailInput(email: string) {
    cy.get("input").eq(2).clear().type(email);
    return this;
  }

  changePassword(password: string) {
    cy.get("input").eq(3).clear().type(password);
    return this;
  }

  clickOnUpdateSettingsButton() {
    cy.get("button").eq(0).click();
    return this;
  }

  clickOnLogoutButton() {
    cy.get("button").eq(1).click();
    return this;
  }
}

export default SettingsPageActions;
