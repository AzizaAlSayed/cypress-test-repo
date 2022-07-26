class ProfileActions {
  openProfilePage(username: string) {
    cy.visit(username);
    return this;
  }
}

export default ProfileActions;
