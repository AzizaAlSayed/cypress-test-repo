import LoginActions from "@pageObjects/signIn/actions";
import LoginAssertions from "@pageObjects/signIn/assertions";
import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

const loginActions = new LoginActions();
const loginAssertions = new LoginAssertions();

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.intercept("POST", "api/users/login").as("LoginAPI");
  loginActions.openLoginPage("#/login");
  loginAssertions.checkURL();
  loginActions.addEmail(email).addPassword(password).clickSignIn();
  cy.wait("@LoginAPI");
  cy.wait(3000);
});

declare global {
  namespace Cypress {
    interface Chainable {
      login: (email: string, password: string) => Cypress.Chainable;
    }
  }
}
