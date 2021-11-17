import { render } from "@testing-library/react";
import { within } from "@testing-library/dom";
import Page from "../index";

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
  id: "alias-dirs",
  head: {
    title: "alias dirs",
    url: "/alias-dirs",
    description: "Automatically creates aliased import directories for babel.",
  },
  filedetails: {
    active: false,
    status: "Decommissioned",
    location: "https://example.com",
    source: "https://github.com/mattcarlotta/alias-dirs",
  },
  preview: {
    alt: "alias-dirs-preview",
    ariaLabel: "Navigate to the Alias Dirs project page.",
    src: "aliasdirs/aliasdirsPreview",
  },
  snapshotdirectory: "aliasdirs",
  snapshots: [
    {
      src: "aliasLogo",
      alt: "logo-preview",
      title: "Logo",
    },
  ],
  tech: ["Babel", "Enzyme", "Javascript", "Jest", "RollupJS"],
};

describe("Page", () => {
  // it("populates the head with a title, url, description, and type", () => {
  //   const { getByTestId } = render(<Page {...initProps} />);
  //   const head = wrapper.find("Header");
  //   expect(head.prop("title")).toEqual(initProps.head.title);
  //   expect(head.prop("url")).toEqual(initProps.head.url);
  //   expect(head.prop("description")).toEqual(initProps.head.description);
  // });

  it("populates the panel title", () => {
    const { getByTestId } = render(<Page {...initProps} />);
    expect(
      within(getByTestId("panel-title")).getByText(initProps.head.title),
    ).toBeInTheDocument();
  });

  it("renders the solar system", () => {
    const { getByTestId } = render(<Page {...initProps} />);
    expect(getByTestId("solar-system")).toBeInTheDocument();
  });

  it("populates the file details", () => {
    const { getByTestId } = render(<Page {...initProps} />);
    expect(
      within(getByTestId("status")).getByText(initProps.filedetails.status),
    ).toBeInTheDocument();
    expect(
      within(getByTestId("filename")).getByText(initProps.head.title),
    ).toBeInTheDocument();
    expect(
      within(getByTestId("location")).getByText("Demo"),
    ).toBeInTheDocument();
    expect(
      within(getByTestId("source")).getByText("Source"),
    ).toBeInTheDocument();
  });

  it("populates the description details", () => {
    const { getByTestId } = render(<Page {...initProps} />);
    expect(
      within(getByTestId("description")).getByText(/With the help of the/),
    ).toBeInTheDocument();
  });

  it("populates the tech details", () => {
    const { getByTestId } = render(<Page {...initProps} />);
    expect(within(getByTestId("tech")).getByText(/Babel/)).toBeInTheDocument();
  });

  it("populates the snapshots", () => {
    const { queryAllByTestId } = render(<Page {...initProps} />);
    const { snapshotdirectory, snapshots } = initProps;

    const snapshot = queryAllByTestId("snapshots")[0];
    expect(within(snapshot).getByText(snapshots[0].title)).toBeInTheDocument();
    expect(snapshot.querySelector("img")?.src).toContain(
      `projects/${snapshotdirectory}/${snapshots[0].src}`,
    );
    expect(snapshot.querySelector("img")?.alt).toContain(snapshots[0].alt);
  });

  // it("opens and closes a modal", async () => {
  //   const { getByTestId, queryAllByTestId } = render(<Page {...initProps} />);

  //   const snapshot = queryAllByTestId("snapshots")[0];
  //   fireEvent.click(snapshot);

  //   await waitFor(() => {
  //     expect(getByTestId("modal-title")).toBeInTheDocument();
  //   });

  //   fireEvent.click(getByTestId("close-modal"));

  //   await waitFor(() => {
  //     expect(getByTestId("modal-title")).not.toBeInTheDocument();
  //   });
  // });

  //   it("populates the file details with active project", () => {
  //     const status = "In Orbit";
  //     const activeProps = {
  //       ...initProps,
  //       filedetails: {
  //         ...initProps.filedetails,
  //         active: true,
  //         status,
  //       },
  //     };

  //     wrapper = mount(<Page {...activeProps} />);

  //     expect(findById("status").first().text()).toEqual(status);

  //     expect(wrapper.find("FiPower").first()).toHaveStyle("color", "limegreen");
  //   });
});
