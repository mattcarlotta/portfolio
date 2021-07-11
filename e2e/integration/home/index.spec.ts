const dayjs = require("dayjs");

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

  // it("displays a link to open email", () => {
  //   cy.findByTestId("mail").should("have.attr", "target", "_blank");
  // });

  it("displays a link to open about me page", () => {
    cy.findByTestId("about-me").should("exist");
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

  it("displays 39 project and exploration links", () => {
    cy.get(".panel-container").should("have.length", 39);
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
