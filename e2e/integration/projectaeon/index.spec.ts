context("Project Aeon Project Page", () => {
  before(() => {
    cy.visit("/project-aeon");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "Project Aeon");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Decommissioned");
    cy.findByTestId("filename").should("have.text", "Project Aeon");
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
    ["Ask Question", "Question", "Comment", "Tags", "Profile"].forEach(id => {
      cy.findByTestId(id.toLowerCase()).click();

      const src = `/projects/projectaeon/projectaeon${id.replace(/ /g, "")}`;

      cy.get("#modal").find("[data-testid='picture']").should("have.length", 1);

      cy.get("#modal")
        .find("[data-testid='picture']")
        .find("source")
        .should("have.attr", "srcset", `${src}.webp`);

      cy.get("#modal")
        .find("[data-testid='picture']")
        .find("img")
        .should("have.attr", "src", `${src}.png`);

      cy.findByTestId("close-modal").click();
    });
  });
});
