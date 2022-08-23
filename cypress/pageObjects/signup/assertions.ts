class SignUpPageAssertions {
  checkSignupURL() {
    cy.url().should("contain", "#/register");
    return this;
  }
}

export default SignUpPageAssertions;
