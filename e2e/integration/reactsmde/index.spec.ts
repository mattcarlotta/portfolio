context("React SMDE Project Page", () => {
  before(() => {
    cy.visit("/react-smde");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "React SMDE");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Decommissioned");
    cy.findByTestId("filename").should("have.text", "React SMDE");
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

  it("displays the 3 project snapshot thumbnail", () => {
    cy.findByTestId("snapshots")
      .should("exist")
      .find("picture")
      .should("have.length", 3);
  });

  it("displays a modal for individual project snapshots", () => {
    [
      {
        id: "ex. code",
        name: "Code",
      },
      {
        id: "ex. code preview",
        name: "CodePreview",
      },
      {
        id: "ex. code source",
        name: "Source",
      },
    ].forEach(({ id, name }) => {
      cy.findByTestId(id).click();

      const src = `/projects/reactsmde/reactsmde${name}`;

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
