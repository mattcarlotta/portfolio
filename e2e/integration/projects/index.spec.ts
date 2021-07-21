const Projects = [
  {
    id: "sjs ice team",
    href: "sjs-ice-team",
    title: "sjs ice team",
  },
  {
    id: "gamersnexus mock up",
    href: "gamersnexus",
    title: "gamersnexus mock up",
  },
  {
    id: "@noshot/env",
    href: "noshotenv",
    title: "@noshot/env",
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
    title: "composable components",
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
    id: "fan controller (nvfc) app",
    href: "nvfc-app",
    title: "fan controller (nvfc) app",
  },
  {
    id: "ssdtgen app",
    href: "ssdtgen-app",
    title: "ssdtgen app",
  },
];

context("Projects Page", () => {
  beforeEach(() => {
    cy.visit("/projects");
  });

  it("displays the projects page", () => {
    cy.findByTestId("projects-page").should("exist");
  });

  it("displays 14 project links", () => {
    cy.get(".panel-container").should("have.length", 14);
  });

  it("navigates to all projects", () => {
    Projects.forEach(({ id, href, title }) => {
      cy.findByTestId(id).click();
      cy.url().should("contain", `/${href}`);
      cy.findByTestId("panel-title").should("have.text", title);

      cy.visit("/projects");
      cy.url().should("contain", "/projects");
    });
  });
});
