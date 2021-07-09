context("Alias Dirs Project Page", () => {
  before(() => {
    cy.visit("/projects/alias-dirs");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "alias dirs");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Decommissioned");
    cy.findByTestId("filename").should("have.text", "alias dirs");
    cy.findByTestId("source").should("have.text", "Source");
    cy.findByTestId("source-link").should("have.attr", "target", "_blank");
  });

  it("displays the project description", () => {
    cy.findByTestId("description").should("exist");
  });

  it("displays the project tech specs", () => {
    cy.findByTestId("tech").should("exist");
  });
});
