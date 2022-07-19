export class LoginConduit {
  navigate(url: string) {
    cy.visit(url);
  }
  checkURL() {
    cy.hash().should("eq", "#/login");
  }
  enterUsername(username: string) {
    cy.get("input[type=email]").should("be.visible").type(username);
  }
  enterPassword(password: string) {
    cy.get("input[type=password]").should("be.visible").type(password);
  }
  clickLoging() {
    cy.get(".btn").should("be.visible").click();
  }
  checkLogedin(content: string) {
    cy.get("ul[show-authed=true]", { timeout: 6000 })
      .children()
      .should("contain", content);
  }
}
