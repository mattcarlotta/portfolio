context("NextJS SSR Kit Project Page", () => {
  before(() => {
    cy.visit("/nextjs-ssr-kit");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "NextJS SSR Kit");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Archived");
    cy.findByTestId("filename").should("have.text", "NextJS SSR Kit");
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
      cy.findByTestId(id.toLowerCase()).click();

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

      cy.findByTestId("close-modal").click();
    });
  });
});
