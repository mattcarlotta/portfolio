context("Subskribble Project Page", () => {
  before(() => {
    cy.visit("/projects/subskribble");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "subskribble");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Decommissioned");
    cy.findByTestId("filename").should("have.text", "subskribble");
    cy.findByTestId("source").should("have.text", "Source");
    cy.findByTestId("source-link").should("have.attr", "target", "_blank");
  });

  it("displays the project description", () => {
    cy.findByTestId("description").should("exist");
  });

  it("displays the project tech specs", () => {
    cy.findByTestId("tech").should("exist");
  });

  it("displays the 10 project snapshot thumbnails", () => {
    cy.findByTestId("snapshots")
      .should("exist")
      .find("picture")
      .should("have.length", 10);
  });

  it("displays a modal for individual project snapshots", () => {
    [
      "create plan",
      "create template",
      "dashboard",
      "notifications",
      "profile",
      "registration",
      "refunds",
      "send message",
      "subscribers",
      "transactions",
    ].forEach(id => {
      cy.findByTestId(id).click();

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
