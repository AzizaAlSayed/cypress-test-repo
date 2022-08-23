class AuthorProfilePageAssertions {
  checkOnfollowingAuthorFromArticlePage(isFollowing = false) {
    cy.get("button")
      .eq(1)
      .should("contain", isFollowing ? "Follow" : "Unfollow");
    return this;
  }

  checkOnfollowingAuthorFromAuthorPage(isFollowing = false) {
    cy.get("button")
      .eq(0)
      .should("contain", isFollowing ? "Follow" : "Unfollow");
    return this;
  }
}

export default AuthorProfilePageAssertions;
