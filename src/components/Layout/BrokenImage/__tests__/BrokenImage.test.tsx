import { render } from "@testing-library/react";
import BrokenImage from "../index";

const { getByText } = render(<BrokenImage />);

describe("Broken Image", () => {
  it("renders without errors", () => {
    expect(getByText("Unable to load image")).toBeInTheDocument();
  });
});
