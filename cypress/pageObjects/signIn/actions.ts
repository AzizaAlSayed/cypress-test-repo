class SignInPageActions {
  openLoginPage(url: string) {
    cy.visit(url);
    return this;
  }

  addEmail(email?: string) {
    email && cy.get("input[type=email]").type(email);
    return this;
  }

  addPassword(password?: string) {
    password && cy.get("input[type=password]").type(password);
    return this;
  }

  clickSignIn() {
    cy.contains(".btn", "Sign in").click();
    return this;
  }

  clickonNeedAnAccount() {
    cy.get("p").contains("Need an account?").click();
    return this;
  }
}

export default SignInPageActions;
