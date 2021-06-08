const dayjs = require("dayjs");

const Projects = [
  {
    id: "sjs ice team",
    href: "sjs-ice-team",
    title: "SJS Ice Team",
  },
  {
    id: "gamersnexus mock up",
    href: "gamersnexus",
    title: "GamersNexus Mock Up",
  },
  {
    id: "@noshot env",
    href: "noshotenv",
    title: "@noshot/env",
  },
  {
    id: "react hooks guide",
    href: "react-hooks-guide",
    title: "React Hooks Guide",
  },
  {
    id: "nextjs ssr kit",
    href: "nextjs-ssr-kit",
    title: "NextJS SSR Kit",
  },
  {
    id: "subskribble",
    href: "subskribble",
    title: "Subskribble",
  },
  {
    id: "composable components",
    href: "composable-styled-components",
    title: "Composable Styled Components",
  },
  {
    id: "react smde",
    href: "react-smde",
    title: "React SMDE",
  },
  {
    id: "alias dirs",
    href: "alias-dirs",
    title: "Alias Dirs",
  },
  {
    id: "fullstack m.e.r.n. kit",
    href: "fullstack-mern-kit",
    title: "Fullstack M.E.R.N. Kit",
  },
  {
    id: "yelp camp",
    href: "yelp-camp",
    title: "Yelp Camp",
  },
  {
    id: "fan controller app",
    href: "nvfc-app",
    title: "Fan Controller (nvfc) App",
  },
  {
    id: "ssdtgen app",
    href: "ssdtgen-app",
    title: "ssdtGen App",
  },
];

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a header", () => {
    cy.findByTestId("header").should("exist");

    cy.findByTestId("header").find("h1").should("have.text", "MATT CARLOTTA");
    cy.findByTestId("header")
      .find("p")
      .should("have.text", "fullstack web developer and commercial artist");
  });

  it("displays a link to open email", () => {
    cy.findByTestId("mail").should("have.attr", "target", "_blank");
  });

  it("displays a link to open github", () => {
    cy.findByTestId("github").should("have.attr", "target", "_blank");
  });

  it("displays a link to open linkedin", () => {
    cy.findByTestId("linkedin").should("have.attr", "target", "_blank");
  });

  it("displays a link to open blogger", () => {
    cy.findByTestId("blog").should("have.attr", "target", "_blank");
  });

  it("displays 13 project links", () => {
    cy.findByTestId("body").find("a").should("have.length", 13);
  });

  it("navigates to all projects", () => {
    Projects.forEach(({ id, href, title }) => {
      cy.findByTestId(id).click();
      cy.url().should("contain", `/${href}`);
      cy.findByTestId("panel-title").should("have.text", title);

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
