class SignInPageAssertions {
  checkIsLogedin(content: string) {
    cy.get("ul[show-authed=true]").children().should("contain", content);
    return this;
  }

  checkErrorContent(content: string, isContains = true) {
    cy.get("div.ng-scope ")
      .children()
      .should(isContains ? "contain" : "not.contain", content);
    return this;
  }

  checkSignUpPageOpening() {
    cy.url().should("contains", "#/register");
    return this;
  }
}

export default SignInPageAssertions;
