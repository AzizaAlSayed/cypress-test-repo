class SignInPageAssertions {
  checkLogedin(content: string) {
    cy.get("ul[show-authed=true]").children().should("contain", content);
    return this;
  }
}

export default SignInPageAssertions;
