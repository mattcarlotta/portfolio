import { render } from "@testing-library/react";
import Header from "../index";

jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
  }),
}));

jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => children,
}));

const initProps = {
  title: "Home",
  url: "/",
};

const { getByTestId } = render(<Header {...initProps} />);

describe("Header", () => {
  it("renders without errors", () => {
    expect(getByTestId("head-title")).toBeInTheDocument();
  });
});
