import { createUserBody } from "@support/constants";
import { NewUser, NewUserResponseBody } from "@support/types";

class SharedDataUtils {
  createUser(user: NewUser): Cypress.Chainable<NewUserResponseBody> {
    return cy
      .request(
        "POSt",
        "https://api.realworld.io/api/users",
        createUserBody(user)
      )
      .then((userResult) => userResult.body.user);
  }
}

export default SharedDataUtils;
