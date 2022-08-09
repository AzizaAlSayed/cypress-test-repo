class SignInPageActions {
  openLoginPage() {
    cy.visit("#/login");
    return this;
  }

  addEmail(email: string) {
    cy.get("input[type=email]").type(email);
    return this;
  }

  addPassword(password: string) {
    cy.get("input[type=password]").type(password);
    return this;
  }

  clickSignIn() {
    cy.get("button").click();
    return this;
  }
}

export default SignInPageActions;
