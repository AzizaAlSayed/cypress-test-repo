class SignUpPageActions {
  openSignUpPage() {
    cy.visit("#/register");
    return this;
  }

  clickingOnHaveAccount() {
    cy.get("p").contains("Have an account?").click();
    return this;
  }

  addUsername(username?: string) {
    username && cy.get("input[type=text]").type(username);
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

  clickSignup() {
    cy.get("button[type=submit]").click();
    return this;
  }
}

export default SignUpPageActions;
