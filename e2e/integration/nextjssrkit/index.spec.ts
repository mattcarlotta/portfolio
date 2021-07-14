context("NextJS SSR Kit Project Page", () => {
  before(() => {
    cy.visit("/projects/nextjs-ssr-kit");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "nextjs ssr kit");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Archived");
    cy.findByTestId("filename").should("have.text", "nextjs ssr kit");
    cy.findByTestId("source").should("have.text", "Source");
    cy.findByTestId("source-link").should("have.attr", "target", "_blank");
  });

  it("displays the project description", () => {
    cy.findByTestId("description").should("exist");
  });

  it("displays the project tech specs", () => {
    cy.findByTestId("tech").should("exist");
  });

  it("displays the 4 project snapshot thumbnail", () => {
    cy.findByTestId("snapshots")
      .should("exist")
      .find("picture")
      .should("have.length", 4);
  });

  it("displays a modal for individual project snapshots", () => {
    ["home", "ex. api", "ex. api create", "ex. api edit"].forEach(id => {
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
