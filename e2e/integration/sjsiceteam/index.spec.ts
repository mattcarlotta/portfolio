context("SJS Ice Team Project Page", () => {
  before(() => {
    cy.visit("/sjs-ice-team");
  });

  it("displays the project page", () => {
    cy.get("[data-testid='panel-title']").should("have.text", "SJS Ice Team");
  });

  it("displays the project details", () => {
    cy.get("[data-testid='status']").should("have.text", "In Orbit");
    cy.get("[data-testid='filename']").should("have.text", "SJS Ice Team");
    cy.get("[data-testid='location-link']").should(
      "have.text",
      "https://sjsiceteam.com",
    );
    cy.get("[data-testid='location-link']").should(
      "have.attr",
      "target",
      "_blank",
    );
    cy.get("[data-testid='source']").should(
      "have.text",
      "https://github.com/mattcarlotta/SJSITApp-SSR",
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

  it("displays the 11 project snapshot thumbnails", () => {
    cy.get("[data-testid='snapshots']").should("have.length", 1);
    cy.get("[data-testid='snapshots']")
      .find("picture")
      .should("have.length", 11);
  });

  it("displays a modal for individual project snapshots", () => {
    [
      {
        id: "Dashboard",
        dir: "dashboard",
        name: "Dashboard",
      },
      {
        id: "Email - Event",
        dir: "email",
        name: "EmailEventReminder",
      },
      {
        id: "Email - Schedule",
        dir: "email",
        name: "EmailScheduleReminder",
      },
      {
        id: "Events",
        dir: "events",
        name: "Events",
      },
      {
        id: "Event Scheduling",
        dir: "schedule",
        name: "EventSchedule",
      },
      {
        id: "Help",
        dir: "help",
        name: "Help",
      },
      {
        id: "Member - Availability",
        dir: "availability",
        name: "Availability",
      },
      {
        id: "Member - Settings",
        dir: "settings",
        name: "Settings",
      },
      {
        id: "Schedule - Calendar",
        dir: "schedule",
        name: "Schedule",
      },
      {
        id: "Schedule - My Games",
        dir: "schedule",
        name: "ScheduleMyGames",
      },
      {
        id: "Schedule - My Event",
        dir: "schedule",
        name: "ScheduledEvent",
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
