import { render } from "@testing-library/react";
import Footer from "../index";

const { getByTestId } = render(<Footer data-testid="footer" />);

describe("Footer", () => {
  it("renders without errors", () => {
    expect(getByTestId("footer")).toBeInTheDocument();
  });
});
