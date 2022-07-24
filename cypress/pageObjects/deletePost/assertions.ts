class DeleteArticleAssertions {
  checkingDeletedPost(title: string) {
    cy.get("h1").first().should("not.contain", title);
    return this;
  }
}

export default DeleteArticleAssertions;
