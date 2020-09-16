context("Composable Styled Components Project Page", () => {
  before(() => {
    cy.visit("/composable-styled-components");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should(
      "have.text",
      "Composable Styled Components",
    );
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "In Orbit");
    cy.get("[data-testid='filename']").should(
      "have.text",
      "Composable Styled Components",
    );
    cy.get("[data-testid='location-link']").should(
      "have.text",
      "https://composable.mattcarlotta.sh",
    );
    cy.get("[data-testid='location-link']").should(
      "have.attr",
      "target",
      "_blank",
    );
    cy.get("[data-testid='source']").should(
      "have.text",
      "https://github.com/mattcarlotta/composable-styled-components",
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

  it("displays the 5 project snapshot thumbnails", () => {
    cy.get("[data-testid='snapshots']").should("have.length", 1);
    cy.get("[data-testid='snapshots']")
      .find("picture")
      .should("have.length", 5);
  });

  it("displays a modal for individual project snapshots", () => {
    ["Home", "API", "Demos", "Releases", "Search"].forEach(id => {
      cy.get(`[data-testid='${id}']`).click();

      const src = `/projects/composable/composable${id.replace(/ /g, "")}`;

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
