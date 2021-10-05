import dayjs from "dayjs";

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a header", () => {
    cy.findByTestId("header").should("exist");

    cy.findByTestId("header").find("h1").should("have.text", "MATT CARLOTTA");
    cy.findByTestId("header")
      .find("p")
      .should("have.text", "fullstack web developer");
  });

  // it("displays a link to open email", () => {
  //   cy.findByTestId("mail").should("have.attr", "target", "_blank");
  // });

  it("displays a link to open my background page", () => {
    cy.findByTestId("background").should("exist");
  });

  it("displays a link to open github", () => {
    cy.findByTestId("github").should("have.attr", "target", "_blank");
  });

  it("displays a link to open codesandbox", () => {
    cy.findByTestId("codesandbox").should("have.attr", "target", "_blank");
  });

  it("displays a link to open linkedin", () => {
    cy.findByTestId("linkedin").should("have.attr", "target", "_blank");
  });

  // it("displays a link to open blogger", () => {
  //   cy.findByTestId("blog").should("have.attr", "target", "_blank");
  // });

  it("displays 3 panel links", () => {
    cy.get(".panel-container").should("have.length", 3);
  });

  it("navigates to project, explorations and background pages", () => {
    [
      { title: "projects", category: true, href: "projects" },
      { title: "explorations", category: true, href: "explorations" },
      { title: "background", category: false, href: "background" },
    ].forEach(({ category, href, title }) => {
      cy.findByTestId(title).click();
      cy.url().should("contain", `/${href}`);
      if (category) cy.findByTestId("category").should("have.text", title);

      cy.findByTestId("go-home").click();
      cy.url().should("contain", "/");
    });
  });

  it("displays a footer", () => {
    cy.findByTestId("footer")
      .should("exist")
      .find("p")
      .should("have.text", `©${dayjs().year()} matt carlotta`);
  });
});
