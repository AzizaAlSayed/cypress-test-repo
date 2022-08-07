class SignInPageAssertions {
  checkLogedin(content: string) {
    cy.get("ul[show-authed=true]", { timeout: 6000 })
      .children()
      .should("contain", content);
    return this;
  }

  checkLoginURL() {
    cy.url().should("contain", "#/login");
    return this;
  }
}

export default SignInPageAssertions;
