class ProfileAssertions {
  checkingExistingPost(title: string) {
    cy.get(".feed-toggle").find(".nav").children().eq(1).click();
    cy.get("h1").first().should("not.contain", title);
    return this;
  }
}
export default ProfileAssertions;
