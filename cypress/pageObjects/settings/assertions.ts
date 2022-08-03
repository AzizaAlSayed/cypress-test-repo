class SettingsPageAssertions {
  checkImgInputContainsValue(value: string, isContain = true) {
    cy.get("input")
      .eq(0)
      .should(isContain ? "have.value" : "not.have.value", value);
    return this;
  }

  checkUsernameInputContainsValue(value: string, isContain = true) {
    cy.get("input")
      .eq(1)
      .should(isContain ? "have.value" : "not.have.value", value);
    return this;
  }

  checkBioInputContainsValue(value: string, isContain = true) {
    cy.get("textarea").should(
      isContain ? "have.value" : "not.have.value",
      value
    );
    return this;
  }

  checkEmailInputContainsValue(value: string, isContain = true) {
    cy.get("input")
      .eq(2)
      .should(isContain ? "have.value" : "not.have.value", value);
    return this;
  }
}

export default SettingsPageAssertions;
