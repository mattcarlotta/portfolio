context("Subskribble Project Page", () => {
  before(() => {
    cy.visit("/subskribble");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should("have.text", "subskribble");
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "Decommissioned");
    cy.get("[data-testid='filename']").should("have.text", "subskribble");
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

  it("displays the 10 project snapshot thumbnails", () => {
    cy.get("[data-testid='snapshots']").should("have.length", 1);
    cy.get("[data-testid='snapshots']")
      .find("picture")
      .should("have.length", 10);
  });

  it("displays a modal for individual project snapshots", () => {
    [
      {
        id: "Create Plan",
        name: "CreatePlan",
      },
      {
        id: "Create Template",
        name: "CreateTemplate",
      },
      {
        id: "Dashboard",
        name: "Dashboard",
      },
      {
        id: "Notifications",
        name: "Notes",
      },
      {
        id: "Profile",
        name: "Profile",
      },
      {
        id: "Registration",
        name: "SubRegister",
      },
      {
        id: "Refunds",
        name: "RefundTrans",
      },
      {
        id: "Send Message",
        name: "SendMessage",
      },
      {
        id: "Subscribers",
        name: "Subs",
      },
      {
        id: "Transactions",
        name: "Transactions",
      },
    ].forEach(({ id, name }) => {
      cy.get(`[data-testid='${id.toLowerCase()}']`).click();

      const src = `/projects/subskribble/subskribble${name}`;

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
