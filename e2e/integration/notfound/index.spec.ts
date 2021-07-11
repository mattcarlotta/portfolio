context("Not Found Page", () => {
  beforeEach(() => {
    cy.visit("/notfound", { failOnStatusCode: false });
  });

  it("displays a 404 message", () => {
    cy.findByTestId("not-found-page").should("exist");

    cy.findByTestId("panel-title").should("have.text", "file not found");
  });

  it("allows a user to navigate back to the home page", () => {
    cy.findByTestId("navigate-home").click();

    cy.url().should("contain", "/");
    cy.findByTestId("home-page").should("exist");
  });
});
