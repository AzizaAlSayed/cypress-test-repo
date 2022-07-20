class SignUpAssertions {
  checkURL() {
    cy.hash().should("contain", "#/login");
    return this;
  }

  checkLogedin(content: string) {
    cy.get("ul[show-authed=true]", { timeout: 6000 })
      .children()
      .should("contain", content);
    return this;
  }
}

export default SignUpAssertions;
