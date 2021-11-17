import { render } from "@testing-library/react";
import FlexCenter from "../index";

describe("FlexCenter", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<FlexCenter data-testid="flex" />);
    expect(getByTestId("flex")).toHaveStyleRule("flex-direction", "column");
  });

  it("sets 'flex-direction' to a 'row' when passed a 'direction' prop", () => {
    const { getByTestId } = render(
      <FlexCenter data-testid="flex" direction="row" />,
    );
    expect(getByTestId("flex")).toHaveStyleRule("flex-direction", "row");
  });
});
