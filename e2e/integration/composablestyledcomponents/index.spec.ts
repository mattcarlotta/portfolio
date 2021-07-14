context("Composable Styled Components Project Page", () => {
  before(() => {
    cy.visit("/projects/composable-styled-components");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "composable components");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Decommissioned");
    cy.findByTestId("filename").should("have.text", "composable components");
    cy.findByTestId("location-link").should("have.text", "Demo");
    cy.findByTestId("location-link").should("have.attr", "target", "_blank");
    cy.findByTestId("source").should("have.text", "Source");
    cy.findByTestId("source-link").should("have.attr", "target", "_blank");
  });

  it("displays the project description", () => {
    cy.findByTestId("description").should("exist");
  });

  it("displays the project tech specs", () => {
    cy.findByTestId("tech").should("exist");
  });

  it("displays the 5 project snapshot thumbnails", () => {
    cy.findByTestId("snapshots")
      .should("exist")
      .find("picture")
      .should("have.length", 5);
  });

  it("displays a modal for individual project snapshots", () => {
    ["Home", "API", "Demos", "Releases", "Search"].forEach(id => {
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
