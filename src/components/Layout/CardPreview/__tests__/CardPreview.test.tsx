import { render } from "@testing-library/react";
import CardPreview from "../index";

const initProps = {
  active: true,
  alt: "portait",
  ariaLabel: "Navigate to example page.",
  description: "Example description.",
  href: "12345",
  idx: 1,
  location: "https://example.com",
  source: "http://example.com",
  src: "me",
  status: "In Orbit",
  title: "example project",
  url: "123456",
};

describe("Image", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<CardPreview {...initProps} />);
    expect(getByTestId("picture")).toBeInTheDocument();
  });

  it("renders inactive projects", () => {
    const { getByTestId } = render(
      <CardPreview {...initProps} active={false} />,
    );
    expect(getByTestId("fipower")).toHaveStyle("color:#2c4776");
  });
});
