class SignUpPageAssertions {
  checkRegistration(content: string) {
    cy.get("ul[show-authed=true]").children().should("contain", content);
    return this;
  }

  checkLoginPage() {
    cy.url().should("contains", "#/login");
    return this;
  }

  hasErrorContent(alert: string, isContains = true) {
    cy.get("div.ng-scope").should(
      isContains ? "contain" : "not.contain",
      alert
    );
    return this;
  }

  checkEmailAlert() {
    cy.get("input")
      .eq(1)
      .invoke("attr", "type")
      .then((type) => {
        expect(type).to.eq("email");
      });
    return this;
  }
}

export default SignUpPageAssertions;
