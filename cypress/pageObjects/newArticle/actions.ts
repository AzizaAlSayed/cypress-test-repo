class NewArticlePageActions {
  openNewArticlePage() {
    cy.visit("#/editor/");
    return this;
  }
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
  addTags(tag: string) {
    cy.get("input[type=text]").eq(2).type(tag);
    return this;
  }
  clickPublish() {
    cy.get(".btn").click();
    return this;
  }
}

export default NewArticlePageActions;
