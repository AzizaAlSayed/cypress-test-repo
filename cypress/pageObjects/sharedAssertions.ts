class SharedAssertions {
  checkUrlContainsValue(value: string, isContain: boolean) {
    cy.url().should(isContain ? "contain" : "not.contain", value);
    return this;
  }
}

export default SharedAssertions;
