context("SJS Ice Team Project Page", () => {
  before(() => {
    cy.visit("/sjs-ice-team");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should(
      "have.text",
      "sjs ice team (w.i.p.)",
    );
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "In Orbit");
    cy.get("[data-testid='filename']").should(
      "have.text",
      "sjs ice team (w.i.p.)",
    );
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

  it("displays the 10 project snapshot thumbnails", () => {
    cy.get("[data-testid='snapshots']").should("have.length", 1);
    cy.get("[data-testid='snapshots']")
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
      cy.get(`[data-testid='${id}']`).click();

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

      cy.get("[data-testid='close-modal']").click();
    });
  });
});
