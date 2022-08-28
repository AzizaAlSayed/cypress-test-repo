class NewArticlePageActions {
  typeInTitleInput(title?: string) {
    const clearTitleInput = cy.get("input[type=text]").eq(0).clear();
    title ? clearTitleInput.type(title) : clearTitleInput;
    return this;
  }

  typeInAboutInput(about?: string) {
    const clearBoutInput = cy.get("input[type=text]").eq(1).clear();
    about ? clearBoutInput.type(about) : clearBoutInput;
    return this;
  }

  typeInArticleInput(article?: string) {
    const clearArticleContentInput = cy.get("textarea").clear();
    article ? clearArticleContentInput.type(article) : clearArticleContentInput;
    return this;
  }

  typeInTagsInput(tags: string[]) {
    tags.forEach((tag) => cy.get("input[type=text]").eq(2).type(tag));
    return this;
  }

  removeTag() {
    cy.get("i[class='ion-close-round']").first().click();
    return this;
  }

  removeAllTags(tags: string[]) {
    tags.forEach((tag) => cy.get("i[class='ion-close-round']").first().click());
    return this;
  }

  clickOnPublishAeticleButton() {
    cy.get("button").click();
  }
}

export default NewArticlePageActions;
