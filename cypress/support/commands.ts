import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";
import { LoginConduit } from "@pageObjects/LoginConduit";

const login = new LoginConduit();

Cypress.Commands.add("login", () => {
  login.navigate("http://demo.realworld.io/#/login");
  login.checkURL();
  login.enterUsername("larissa77j@gmail.com");
  login.enterPassword("lara123");
  login.clickLoging();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login: () => Cypress.Chainable;

    }
  }
}
