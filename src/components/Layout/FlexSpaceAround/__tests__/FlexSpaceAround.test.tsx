import { render } from "@testing-library/react";
import FlexSpaceAround from "../index";

describe("FlexSpaceAround", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<FlexSpaceAround data-testid="flex" />);
    const flexNode = getByTestId("flex");
    expect(flexNode).toHaveStyleRule("flex-direction", "row");
    expect(flexNode).toHaveStyleRule("justify-content", "space-around");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    const { getByTestId } = render(
      <FlexSpaceAround data-testid="flex" direction="column" />,
    );
    expect(getByTestId("flex")).toHaveStyleRule("flex-direction", "column");
  });

  it("sets media query when passed a 'breakpoint' prop", () => {
    const { getByTestId } = render(
      <FlexSpaceAround data-testid="flex" breakpoint />,
    );
    expect(getByTestId("flex")).toHaveStyleRule("flex-wrap", "wrap", {
      media: "(max-width: 500px)",
    });
  });
});
