context("ssdtGen App Project Page", () => {
  before(() => {
    cy.visit("/ssdtgen-app");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "ssdtGen App");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Archived");
    cy.findByTestId("filename").should("have.text", "ssdtGen App");
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
      { id: "logo", name: "Logo" },
      { id: "app", name: "Preview" },
      { id: "ex. ssdt", name: "Example" },
    ].forEach(({ id, name }) => {
      cy.findByTestId(id).click();

      const src = `/projects/ssdtgenapp/ssdtgenapp${name}`;

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
