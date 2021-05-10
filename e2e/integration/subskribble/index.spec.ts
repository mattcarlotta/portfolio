context("Subskribble Project Page", () => {
  before(() => {
    cy.visit("/subskribble");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "Subskribble");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "Decommissioned");
    cy.findByTestId("filename").should("have.text", "Subskribble");
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
      {
        id: "create plan",
        name: "CreatePlan",
      },
      {
        id: "create template",
        name: "CreateTemplate",
      },
      {
        id: "dashboard",
        name: "Dashboard",
      },
      {
        id: "notifications",
        name: "Notes",
      },
      {
        id: "profile",
        name: "Profile",
      },
      {
        id: "registration",
        name: "SubRegister",
      },
      {
        id: "refunds",
        name: "RefundTrans",
      },
      {
        id: "send message",
        name: "SendMessage",
      },
      {
        id: "subscribers",
        name: "Subs",
      },
      {
        id: "transactions",
        name: "Transactions",
      },
    ].forEach(({ id, name }) => {
      cy.findByTestId(id).click();

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

      cy.findByTestId("close-modal").click();
    });
  });
});
