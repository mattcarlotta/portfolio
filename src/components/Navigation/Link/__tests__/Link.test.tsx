import { render } from "@testing-library/react";
import Link from "../index";

const initProps = {
  ariaLabel: "Navigate to test",
  className: "Test",
  children: "Test",
  dataTestId: "link",
  href: "/",
};

describe("Styled Link", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Link {...initProps} />);
    const linkNode = getByTestId("link");
    expect(linkNode).toHaveStyleRule("padding", "10px 15px");
    expect(linkNode).toHaveStyleRule("text-decoration", "none", {
      target: "hover",
    });
    expect(linkNode).toHaveStyleRule("text-decoration", "none", {
      target: "focus",
    });
  });

  it("sets padding when passed a 'padding' prop", () => {
    const { getByTestId } = render(<Link {...initProps} padding="10px" />);
    expect(getByTestId("link")).toHaveStyleRule("padding", "10px");
  });

  it("sets margin when passed a 'margin' prop", () => {
    const { getByTestId } = render(<Link {...initProps} margin="10px" />);
    expect(getByTestId("link")).toHaveStyleRule("margin", "10px");
  });

  it("sets font-size when passed a 'fontSize' prop", () => {
    const { getByTestId } = render(<Link {...initProps} fontSize="10px" />);
    expect(getByTestId("link")).toHaveStyleRule("font-size", "10px");
  });

  it("sets text-decoration when passed a 'showUnderline' prop", () => {
    const { getByTestId } = render(<Link {...initProps} showUnderline />);
    const linkNode = getByTestId("link");
    expect(linkNode).toHaveStyleRule("text-decoration", "underline", {
      target: "hover",
    });
    expect(linkNode).toHaveStyleRule("text-decoration", "underline", {
      target: "focus",
    });
  });
});
