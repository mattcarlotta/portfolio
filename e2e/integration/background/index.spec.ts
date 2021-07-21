context("Background Page", () => {
  before(() => {
    cy.visit("/background");
  });

  it("displays the background page", () => {
    cy.findByTestId("panel-title").should("have.text", "background");
  });

  it("displays the project details", () => {
    cy.findByTestId("status").should(
      "have.text",
      "Activated in September 2016",
    );
    cy.findByTestId("location").should(
      "have.text",
      "Small town in Oregon, USA",
    );
    cy.findByTestId("level").should("have.text", "Mid-Level Developer");
    cy.findByTestId("send-email-link").should("have.attr", "target", "_blank");
  });

  it("displays my brief", () => {
    cy.findByTestId("brief").should("exist");
  });

  it("displays my tech specs", () => {
    cy.findByTestId("tech").should("exist");
  });
});
