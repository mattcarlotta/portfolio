context("Project Aeon Project Page", () => {
  before(() => {
    cy.visit("/project-aeon");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should("have.text", "Project Aeon");
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "In Development");
    cy.get("[data-testid='filename']").should("have.text", "Project Aeon");
    cy.get("[data-testid='source-link']").should(
      "have.text",
      "https://github.com/mattcarlotta/project-aeon",
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
    ["Ask Question", "Question", "Comment", "Tags", "Profile"].forEach(id => {
      cy.get(`[data-testid='${id}']`).click();

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

      cy.get("[data-testid='close-modal']").click();
    });
  });
});
