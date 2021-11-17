import { render } from "@testing-library/react";
import Flex from "../index";

describe("Flex", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Flex data-testid="flex" />);
    const flexNode = getByTestId("flex");
    expect(flexNode).toHaveStyleRule("flex-direction", "row");
    expect(flexNode).toHaveStyleRule("flex-wrap", "nowrap");
    expect(flexNode).toHaveStyleRule("justify-content", "start");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    const { getByTestId } = render(
      <Flex data-testid="flex" direction="column" />,
    );
    expect(getByTestId("flex")).toHaveStyleRule("flex-direction", "column");
  });

  it("sets 'flex-wrap' as a 'wrap' when passed a 'wrap' prop", () => {
    const { getByTestId } = render(<Flex data-testid="flex" flexwrap />);
    expect(getByTestId("flex")).toHaveStyleRule("flex-wrap", "wrap");
  });

  it("sets 'justify-content' as a 'center' when passed a 'justify' prop", () => {
    const { getByTestId } = render(
      <Flex data-testid="flex" justify="center" />,
    );
    expect(getByTestId("flex")).toHaveStyleRule("justify-content", "center");
  });

  it("sets height when passed a 'height' prop", () => {
    const { getByTestId } = render(<Flex data-testid="flex" height="10px" />);
    expect(getByTestId("flex")).toHaveStyleRule("height", "10px");
  });

  it("sets margin when passed a 'margin' prop", () => {
    const { getByTestId } = render(<Flex data-testid="flex" margin="10px" />);
    expect(getByTestId("flex")).toHaveStyleRule("margin", "10px");
  });

  it("sets width when passed a 'width' prop", () => {
    const { getByTestId } = render(<Flex data-testid="flex" width="10px" />);
    expect(getByTestId("flex")).toHaveStyleRule("width", "10px");
  });

  it("sets media query when passed a 'breakpoint' prop", () => {
    const { getByTestId } = render(<Flex data-testid="flex" breakpoint />);
    const flexNode = getByTestId("flex");
    expect(flexNode).toHaveStyleRule("display", "block", {
      media: "(max-width: 500px)",
    });
    expect(flexNode).toHaveStyleRule("text-align", "center", {
      media: "(max-width: 500px)",
    });
    expect(flexNode).toHaveStyleRule("width", "100%", {
      media: "(max-width: 500px)",
    });
  });
});
