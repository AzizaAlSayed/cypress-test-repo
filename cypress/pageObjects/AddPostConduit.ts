export class AddPostConduit {
  navigate() {
    cy.get("ul[show-authed=true]")
      .children()
      .should("be.visible")
      .eq(1)
      .click();
  }
  addTitle(title: string) {
    cy.get("input[type=text]").eq(0).type(title);
  }
  addAbout(about: string) {
    cy.get("input[type=text]").eq(1).type(about);
  }
  addArticle(article: string) {
    cy.get("textarea").type(article);
  }
  addTags(tag: string) {
    cy.get("input[type=text]").eq(2).type(tag);
  }
  clickPublish() {
    cy.get(".btn").click();
  }
  checkingTheArticlePage() {
    cy.url().should("contains", "article");
  }
}
