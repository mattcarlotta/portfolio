context("Fullstack M.E.R.N. Kit Project Page", () => {
  before(() => {
    cy.visit("/projects/fullstack-mern-kit");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should(
      "have.text",
      "fullstack m.e.r.n. kit",
    );
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Archived");
    cy.findByTestId("filename").should("have.text", "fullstack m.e.r.n. kit");
    cy.findByTestId("source").should("have.text", "Source");
    cy.findByTestId("source-link").should("have.attr", "target", "_blank");
  });

  it("displays the project description", () => {
    cy.findByTestId("description").should("exist");
  });

  it("displays the project tech specs", () => {
    cy.findByTestId("tech").should("exist");
  });

  it("displays the 1 project snapshot thumbnail", () => {
    cy.findByTestId("snapshots")
      .should("exist")
      .find("picture")
      .should("have.length", 1);
  });

  it("displays a modal for individual project snapshots", () => {
    ["Logo"].forEach(id => {
      cy.findByTestId(id.toLowerCase()).click();

      cy.get("#modal")
        .find("[data-testid='modal-title']")
        .should("have.text", id.toLowerCase());

      cy.get("#modal")
        .find(`[data-testid='image-${id.toLowerCase()}']`)
        .should("exist");

      cy.findByTestId("close-modal").click();
    });
  });
});
