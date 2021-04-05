context("React SMDE Project Page", () => {
  before(() => {
    cy.visit("/react-smde");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should("have.text", "react smde");
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "Decommissioned");
    cy.get("[data-testid='filename']").should("have.text", "react smde");
    cy.get("[data-testid='location-link']").should("have.text", "demo");
    cy.get("[data-testid='location-link']").should(
      "have.attr",
      "target",
      "_blank",
    );
    cy.get("[data-testid='source']").should("have.text", "source");
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

  it("displays the 3 project snapshot thumbnail", () => {
    cy.get("[data-testid='snapshots']").should("have.length", 1);
    cy.get("[data-testid='snapshots']")
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
      cy.get(`[data-testid='${id}']`).click();

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

      cy.get("[data-testid='close-modal']").click();
    });
  });
});
