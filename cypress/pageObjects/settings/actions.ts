class SettingsPageActions {
  openSettingsPage() {
    cy.visit("#/settings");
    return this;
  }

  updateImg(img: string) {
    cy.get("input").eq(0).clear().type(img);
    return this;
  }

  updateUsername(username: string) {
    cy.get("input").eq(1).clear().type(username);
    return this;
  }

  updateBio(bio: string) {
    cy.get("textarea").clear().type(bio);
    return this;
  }

  updateEmail(email: string) {
    cy.get("input").eq(2).clear().type(email);
    return this;
  }

  changePassword(password: string) {
    cy.get("input").eq(3).clear().type(password);
    return this;
  }

  clickOnUpdateSettings() {
    cy.get("button").eq(0).click();
    return this;
  }

  logout() {
    cy.get("button").eq(1).click();
    return this;
  }
}

export default SettingsPageActions;
