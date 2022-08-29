class SignUpPageActions {
  clickOnHaveAnAccountLink() {
    cy.get("p").contains("Have an account?").click();
    return this;
  }

  typeInUsernameInput(username: string) {
    cy.get("input[type=text]").type(username);
    return this;
  }

  typeInEmailInput(email: string) {
    cy.get("input[type=email]").type(email);
    return this;
  }

  typeInPasswordInput(password: string) {
    cy.get("input[type=password]").type(password);
    return this;
  }

  clickSignupButton() {
    cy.get("button[type=submit]").click();
    return this;
  }
}

export default SignUpPageActions;
