import { render } from "@testing-library/react";
import Button from "../index";

describe("Button", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Button data-testid="custom-btn" />);
    const btnNode = getByTestId("custom-btn");
    expect(btnNode).toHaveStyleRule("color", "#1f1f1f");
    expect(btnNode).toHaveStyleRule("height", "auto");
    expect(btnNode).toHaveStyleRule("width", "auto");
    expect(btnNode).toHaveStyleRule("color", "#1f1f1f", { target: "hover" });
  });

  it("sets 'color' when passed a 'clickable' prop", () => {
    const { getByTestId } = render(
      <Button data-testid="custom-btn" clickable />,
    );
    const btnNode = getByTestId("custom-btn");

    expect(btnNode).toHaveStyleRule("color", "#fff");
    expect(btnNode).toHaveStyleRule("color", "#0080ff", { target: "hover" });
  });

  it("sets height when passed a 'height' prop", () => {
    const { getByTestId } = render(
      <Button data-testid="custom-btn" height="10px" />,
    );
    expect(getByTestId("custom-btn")).toHaveStyleRule("height", "10px");
  });

  it("sets width when passed a 'width' prop", () => {
    const { getByTestId } = render(
      <Button data-testid="custom-btn" width="10px" />,
    );
    expect(getByTestId("custom-btn")).toHaveStyleRule("width", "10px");
  });
});
