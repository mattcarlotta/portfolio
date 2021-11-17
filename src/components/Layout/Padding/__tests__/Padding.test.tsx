import { render } from "@testing-library/react";
import Padding from "../index";

describe("Padding Component", () => {
  it("initially renders a default padding", () => {
    const { getByTestId } = render(<Padding data-testid="padding" />);
    const paddingNode = getByTestId("padding");
    expect(paddingNode).toHaveStyleRule("padding-top", "0px");
    expect(paddingNode).toHaveStyleRule("padding-right", "0px");
    expect(paddingNode).toHaveStyleRule("padding-bottom", "0px");
    expect(paddingNode).toHaveStyleRule("padding-left", "0px");
  });

  it("sets a media rule when passed a 'breakpoint' prop", () => {
    const { getByTestId } = render(
      <Padding data-testid="padding" breakpoint />,
    );
    const paddingNode = getByTestId("padding");
    expect(paddingNode).toHaveStyleRule("padding-left", "0", {
      media: "(max-width: 610px)",
    });
    expect(paddingNode).toHaveStyleRule("padding-right", "0", {
      media: "(max-width: 610px)",
    });
  });

  it("sets padding-top when passed a 'top' prop", () => {
    const { getByTestId } = render(
      <Padding data-testid="padding" top="10px" />,
    );
    expect(getByTestId("padding")).toHaveStyleRule("padding-top", "10px");
  });

  it("sets padding-right when passed a 'right' prop", () => {
    const { getByTestId } = render(
      <Padding data-testid="padding" right="10px" />,
    );
    expect(getByTestId("padding")).toHaveStyleRule("padding-right", "10px");
  });

  it("sets padding-bottom when passed a 'bottom' prop", () => {
    const { getByTestId } = render(
      <Padding data-testid="padding" bottom="10px" />,
    );
    expect(getByTestId("padding")).toHaveStyleRule("padding-bottom", "10px");
  });

  it("sets padding-left when passed a 'left' prop", () => {
    const { getByTestId } = render(
      <Padding data-testid="padding" left="10px" />,
    );
    expect(getByTestId("padding")).toHaveStyleRule("padding-left", "10px");
  });
});
