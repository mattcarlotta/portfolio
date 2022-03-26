import { render, waitFor } from "@testing-library/react";
import Image from "../index";

const initProps = {
  alt: "",
  contentType: "image/png",
  placeholder: true,
  url: "example",
  height: 250,
  width: 250,
};

describe("Image", () => {
  it("renders without errors", () => {
    const { getByTestId } = render(<Image {...initProps} />);
    expect(getByTestId("picture")).toBeInTheDocument();
  });

  it("renders a placeholder", () => {
    const { getByTestId } = render(<Image {...initProps} />);
    expect(getByTestId("placeholder")).toBeInTheDocument();
  });

  it("on success loads an image", async () => {
    const { getByTestId } = render(<Image {...initProps} />);

    const node = getByTestId("image");

    await waitFor(() => {
      // @ts-ignore
      node?.onload();

      expect(getByTestId("placeholder")).toHaveStyleRule("display", "none");
    });
  });

  it("on failure displays a broken link icon", async () => {
    const { getByTestId } = render(<Image {...initProps} />);

    const node = getByTestId("image");

    await waitFor(() => {
      // @ts-ignore
      node?.onerror();

      expect(getByTestId("broken-image")).toBeInTheDocument();
    });
  });
});
