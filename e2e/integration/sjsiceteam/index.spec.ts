context("SJS Ice Team Project Page", () => {
  before(() => {
    cy.visit("/projects/sjs-ice-team");
  });

  it("displays the project page", () => {
    cy.findByTestId("panel-title").should("have.text", "sjs ice team");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should("have.text", "In Orbit");
    cy.findByTestId("filename").should("have.text", "sjs ice team");
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

  it("displays the 10 project snapshot thumbnails", () => {
    cy.findByTestId("snapshots")
      .should("exist")
      .find("picture")
      .should("have.length", 10);
  });

  it("displays a modal for individual project snapshots", () => {
    [
      {
        id: "dashboard",
        dir: "newdesign/dashboard",
        name: "Dashboard",
      },
      {
        id: "email event",
        dir: "email",
        name: "EmailEventReminder",
      },
      {
        id: "email schedule",
        dir: "email",
        name: "EmailScheduleReminder",
      },
      {
        id: "event calendar",
        dir: "newdesign/schedule",
        name: "Schedule",
      },
      {
        id: "event",
        dir: "newdesign/event",
        name: "Event",
      },
      {
        id: "help",
        dir: "newdesign/help",
        name: "Help",
      },
      {
        id: "home",
        dir: "newdesign/home",
        name: "Home",
      },
      {
        id: "my availability",
        dir: "newdesign/availability",
        name: "Availability",
      },
      {
        id: "my response",
        dir: "newdesign/settings",
        name: "MyResponse",
      },
      {
        id: "settings",
        dir: "newdesign/settings",
        name: "Settings",
      },
    ].forEach(({ id, dir, name }) => {
      cy.findByTestId(id).click();

      const src = `/projects/sjsit/${dir}/sjsiceteam${name}`;

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
