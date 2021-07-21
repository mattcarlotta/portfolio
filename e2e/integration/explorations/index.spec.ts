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

context("Explorations Page", () => {
  beforeEach(() => {
    cy.visit("/explorations");
  });

  it("displays 25 project and exploration links", () => {
    cy.get(".panel-container").should("have.length", 25);
  });

  it("navigates to all explorations", () => {
    Explorations.forEach(({ href, title }) => {
      cy.findByTestId(title).click();
      cy.url().should("contain", `/${href}`);
      cy.findByTestId("panel-title").should("have.text", title);

      cy.visit("/explorations");
      cy.url().should("contain", "/explorations");
    });
  });
});
