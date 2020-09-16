context("Alias Dirs Project Page", () => {
  before(() => {
    cy.visit("/alias-dirs");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should("have.text", "Alias Dirs");
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "Decommissioned");
    cy.get("[data-testid='filename']").should("have.text", "Alias Dirs");
    cy.get("[data-testid='source']").should(
      "have.text",
      "https://github.com/mattcarlotta/alias-dirs",
    );
    cy.get("[data-testid='source-link']").should(
      "have.attr",
      "target",
      "_blank",
    );
  });

  it("displays the project description", () => {
    cy.get("[data-testid='description']").should("have.length", 1);
  });

  it("displays the project tech specs", () => {
    cy.get("[data-testid='tech']").should("have.length", 1);
  });
});
