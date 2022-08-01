import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

Cypress.Commands.add("login", (email?: string, password?: string) => {
  const userEmail = email || "admin-lara@test.com";
  const userPassword = password || "adminLara";
  cy.request("POST", "https://api.realworld.io/api/users/login", {
    user: { email: userEmail, password: userPassword },
  }).then((response) => {
    localStorage.setItem("jwtToken", response.body.user.token);
    localStorage.setItem("userInfo", JSON.stringify(response.body.user));
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login: (email?: string, password?: string) => Cypress.Chainable;
    }
  }
}
