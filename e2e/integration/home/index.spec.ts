const Projects = [
  {
    id: "Snackables",
    href: "snackables",
    title: "Snackables",
  },
  {
    id: "Composable Styled Components",
    href: "composable-styled-components",
    title: "Composable Styled Components",
  },
  {
    id: "SJS Ice Team",
    href: "sjs-ice-team",
    title: "SJS Ice Team",
  },
  {
    id: "NextJS SSR Kit",
    href: "nextjs-ssr-kit",
    title: "NextJS SSR Kit",
  },
  {
    id: "React SMDE",
    href: "react-smde",
    title: "React SMDE",
  },
  {
    id: "Alias Dirs",
    href: "alias-dirs",
    title: "Alias Dirs",
  },
  {
    id: "React Hooks Guide",
    href: "react-hooks-guide",
    title: "React Hooks Guide",
  },
  {
    id: "Subskribble",
    href: "subskribble",
    title: "Subskribble",
  },
  {
    id: "Fullstack M.E.R.N. Kit",
    href: "fullstack-mern-kit",
    title: "Fullstack M.E.R.N. Kit",
  },
  {
    id: "Yelp Camp",
    href: "yelp-camp",
    title: "Yelp Camp",
  },
  {
    id: "Nvidia Fan Controller (nvfc) App",
    href: "nvfc-app",
    title: "Nvidia Fan Controller (nvfc) App",
  },
  {
    id: "ssdtGen App",
    href: "ssdtgen-app",
    title: "ssdtGen App",
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

  it("displays 12 project links", () => {
    cy.get("[data-testid='body']").find("a").should("have.length", 12);
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
      .should("have.text", "©2020 matt carlotta");
  });
});
