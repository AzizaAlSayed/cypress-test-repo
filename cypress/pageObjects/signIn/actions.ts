class SignInPageActions {
  typeInEmailInput(email: string) {
    cy.get("input[type=email]").type(email);
    return this;
  }

  typeInPasswordInput(password: string) {
    cy.get("input[type=password]").type(password);
    return this;
  }

  clickOnSignInButton() {
    cy.contains(".btn", "Sign in").click();
    return this;
  }

  clickOnNeedAnAccountLink() {
    cy.get("p").contains("Need an account?").click();
    return this;
  }
}

export default SignInPageActions;
