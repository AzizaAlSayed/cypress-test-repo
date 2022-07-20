class LoginActions {
  openLoginPage(url: string) {
    cy.visit(url);
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
    cy.contains(".btn", "Sign in").click();
    return this;
  }
}
export default LoginActions;
