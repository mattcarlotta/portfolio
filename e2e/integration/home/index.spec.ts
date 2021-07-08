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

const Explorations = [
  {
    href: "ttmj3",
    title: "drag & drop between lists",
  },
  {
    href: "8lby0",
    title: "fetching data custom hook",
  },
  {
    href: "0kcxo",
    title: "crud securities list",
  },
  {
    href: "qm96vv8z9",
    title: "dynamic field creation",
  },
  {
    href: "k5n52xq70r",
    title: "draggable bound to window",
  },
  {
    href: "4x47oznvvx",
    title: "formik with ant design",
  },
  {
    href: "fglet",
    title: "react router anchor link",
  },
  {
    href: "m58q8l054x",
    title: "dropzone redux form",
  },
  {
    href: "6lmv669kz",
    title: "custom image transition",
  },
  {
    href: "w72k49nn27",
    title: "custom select",
  },
  {
    href: "nli0j",
    title: "custom sidebar",
  },
  {
    href: "x5xon",
    title: "custom victory chart",
  },
  {
    href: "8zkz2vn4kj",
    title: "antd tiny upload",
  },
  {
    href: "rr8lc",
    title: "react ralculator",
  },
  {
    href: "xgbhe",
    title: "custom input",
  },
  {
    href: "o13bo",
    title: "blog example",
  },
  {
    href: "2pyoxy7nr0",
    title: "form validation",
  },
  {
    href: "l2wl3866kq",
    title: "switching themes",
  },
  {
    href: "vz9oe",
    title: "custom wave skeleton",
  },
  {
    href: "qbn0n",
    title: "custom modal",
  },
  {
    href: "38xjv75rlm",
    title: "reusable modals",
  },
  {
    href: "qi7xk",
    title: "custom slider",
  },
  {
    href: "hm53i",
    title: "custom drag binding",
  },
  {
    href: "8zkrw9jw50",
    title: "custom accordian",
  },
  {
    href: "xd3zz",
    title: "custom timeline",
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

  it("displays 39 project and exploration links", () => {
    cy.findByTestId("body").find("a").should("have.length", 39);
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

  it("navigates to all explorations", () => {
    Explorations.forEach(({ href, title }) => {
      cy.findByTestId(title).click();
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
