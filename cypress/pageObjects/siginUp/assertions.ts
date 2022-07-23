class SignUpAssertions {
  checkLogedin(content: string) {
    cy.get("ul[show-authed=true]", { timeout: 6000 })
      .children()
      .should("contain", content);
    return this;
  }
}

export default SignUpAssertions;
