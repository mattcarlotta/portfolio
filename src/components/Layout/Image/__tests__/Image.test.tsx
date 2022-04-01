import { render, waitFor } from "@testing-library/react";
import Image from "../index";

jest.mock("~components/ScrollHeightContext", () => ({
  __esModule: true,
  useScrollHeight: jest
    .fn()
    .mockReturnValueOnce({
      clientHeight: 0,
      scrollHeight: 0,
    })
    .mockReturnValue({
      clientHeight: 1000,
      scrollHeight: 0,
    }),
}));

const initProps = {
  alt: "",
  contentType: "image/png",
  placeholder: true,
  url: "example",
  height: 250,
  width: 250,
};

describe("Image", () => {
  it("renders without errors and displays a placeholder", () => {
    const { getByTestId } = render(<Image {...initProps} />);
    expect(getByTestId("picture")).toBeInTheDocument();
    expect(getByTestId("placeholder")).toBeInTheDocument();
  });

  it("on success loads an image", async () => {
    const { getByTestId } = render(<Image {...initProps} />);

    await waitFor(() => {
      expect(getByTestId("image")).toBeInTheDocument();
    });
  });
});
