class NewArticlePageActions {
  addTitle(title: string) {
    cy.get("input[type=text]").eq(0).type(title);
    return this;
  }

  addAbout(about: string) {
    cy.get("input[type=text]").eq(1).type(about);
    return this;
  }

  addArticle(article: string) {
    cy.get("textarea").type(article);
    return this;
  }

  addTags(tags: string[]) {
    tags.forEach((tag) => cy.get("input[type=text]").eq(2).type(tag));
    return this;
  }

  clickPublishButton() {
    cy.get(".btn").click();
    return this;
  }
}

export default NewArticlePageActions;
