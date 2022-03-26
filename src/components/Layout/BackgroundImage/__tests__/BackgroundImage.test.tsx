import { render } from "@testing-library/react";
import { BackgroundImage } from "../index";

const src = "/projects/123.png";

describe("BackgroundImage", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(
      <BackgroundImage data-testid="image" src={src} supportsWebp />,
    );
    expect(getByTestId("image")).toHaveStyleRule(
      "background-image",
      `url(${src}?fm=webp)`,
    );
  });

  it("adjusts the background image when 'supportsWebp' is false", () => {
    const { getByTestId } = render(
      <BackgroundImage data-testid="image" src={src} supportsWebp={false} />,
    );

    expect(getByTestId("image")).toHaveStyleRule(
      "background-image",
      `url(${src})`,
    );
  });
});
