class SignInPageActions {
  openLoginPage() {
    cy.visit("#/login");
    return this;
  }

  typeInEmailInput(email: string) {
    cy.get("input[type=email]").type(email);
    return this;
  }

  typeInpasswordInput(password: string) {
    cy.get("input[type=password]").type(password);
    return this;
  }

  clickSignInButton() {
    cy.contains(".btn", "Sign in").click();
    return this;
  }

  clickOnNeedAnAccountLink() {
    cy.get("p").contains("Need an account?").click();
    return this;
  }
}

export default SignInPageActions;
