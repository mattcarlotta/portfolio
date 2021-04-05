context("NextJS SSR Kit Project Page", () => {
  before(() => {
    cy.visit("/nextjs-ssr-kit");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should("have.text", "nextjs ssr kit");
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "In Orbit");
    cy.get("[data-testid='filename']").should("have.text", "nextjs ssr kit");
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

  it("displays the 4 project snapshot thumbnail", () => {
    cy.get("[data-testid='snapshots']").should("have.length", 1);
    cy.get("[data-testid='snapshots']")
      .find("picture")
      .should("have.length", 4);
  });

  it("displays a modal for individual project snapshots", () => {
    [
      {
        id: "home",
        name: "Home",
      },
      {
        id: "ex. api",
        name: "ExampleAPI",
      },
      {
        id: "ex. api create",
        name: "ExampleAPICreate",
      },
      {
        id: "ex. api edit",
        name: "ExampleAPIEdit",
      },
    ].forEach(({ id, name }) => {
      cy.get(`[data-testid='${id}']`).click();

      const src = `/projects/nextssrkit/nextssrkit${name}`;

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
