const dayjs = require("dayjs");

const Projects = [
  {
    id: "sjs ice team (w.i.p.)",
    href: "sjs-ice-team",
    title: "sjs ice team (w.i.p.)",
  },
  {
    id: "gamersnexus mock up",
    href: "gamersnexus",
    title: "gamersnexus mock up",
  },
  {
    id: "snackables",
    href: "snackables",
    title: "snackables",
  },
  {
    id: "react hooks guide",
    href: "react-hooks-guide",
    title: "react hooks guide",
  },
  {
    id: "nextjs ssr kit",
    href: "nextjs-ssr-kit",
    title: "nextjs ssr kit",
  },
  {
    id: "subskribble",
    href: "subskribble",
    title: "subskribble",
  },
  {
    id: "composable components",
    href: "composable-styled-components",
    title: "composable styled components",
  },
  {
    id: "react smde",
    href: "react-smde",
    title: "react smde",
  },
  {
    id: "alias dirs",
    href: "alias-dirs",
    title: "alias dirs",
  },
  {
    id: "fullstack m.e.r.n. kit",
    href: "fullstack-mern-kit",
    title: "fullstack m.e.r.n. kit",
  },
  {
    id: "yelp camp",
    href: "yelp-camp",
    title: "yelp camp",
  },
  {
    id: "fan controller app",
    href: "nvfc-app",
    title: "fan controller (nvfc) app",
  },
  {
    id: "ssdtgen app",
    href: "ssdtgen-app",
    title: "ssdtgen app",
  },
];

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a header", () => {
    cy.get("[data-testid='header']").should("have.length", 1);
    cy.get("[data-testid='header']")
      .find("h1")
      .should("have.text", "MATT CARLOTTA");
    cy.get("[data-testid='header']")
      .find("p")
      .should("have.text", "fullstack web developer and commercial artist");
  });

  it("displays a link to open email", () => {
    cy.get("[data-testid='mail']").should("have.attr", "target", "_blank");
  });

  it("displays a link to open github", () => {
    cy.get("[data-testid='github']").should("have.attr", "target", "_blank");
  });

  it("displays a link to open linkedin", () => {
    cy.get("[data-testid='linkedin']").should("have.attr", "target", "_blank");
  });

  it("displays a link to open blogger", () => {
    cy.get("[data-testid='blog']").should("have.attr", "target", "_blank");
  });

  it("displays 13 project links", () => {
    cy.get("[data-testid='body']").find("a").should("have.length", 13);
  });

  it("navigates to all projects", () => {
    Projects.forEach(({ id, href, title }) => {
      cy.get(`[data-testid='${id}']`).click();
      cy.url().should("contain", `/${href}`);
      cy.get("[data-testid='panel-title']").should("have.text", title);

      cy.get("[data-testid='go-home']").click();
      cy.url().should("contain", "/");
    });
  });

  it("displays a footer", () => {
    cy.get("[data-testid='footer']").should("have.length", 1);
    cy.get("[data-testid='footer']")
      .find("p")
      .should("have.text", `©${dayjs().year()} matt carlotta`);
  });
});
