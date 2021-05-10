import { mount, ReactWrapper } from "enzyme";
import Page from "../index";

const initProps = {
  description: "hi",
  head: {
    title: "Alias Dirs",
    url: "/alias-dirs",
    description: "Automatically creates aliased import directories for babel.",
  },
  filedetails: {
    active: false,
    status: "Decommissioned",
    location: "https://example.com",
    source: "https://github.com/mattcarlotta/alias-dirs",
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

let wrapper: ReactWrapper = mount(<Page {...initProps} />);

const findById = (id: string): ReactWrapper =>
  wrapper.find(`[data-testid='${id}']`);

describe("Page", () => {
  it("renders without errors", () => {
    expect(wrapper.find("Page")).toExist();
  });

  it("populates the head with a title, url, description, and type", () => {
    const head = wrapper.find("Header");
    expect(head.prop("title")).toEqual(initProps.head.title);
    expect(head.prop("url")).toEqual(initProps.head.url);
    expect(head.prop("description")).toEqual(initProps.head.description);
  });

  it("populates the panel title", () => {
    expect(wrapper.find("PanelTitle").text()).toEqual(initProps.head.title);
  });

  it("renders the solar system", () => {
    expect(findById("solar-system")).toExist();
  });

  it("populates the file details", () => {
    expect(findById("status").first().text()).toEqual(
      initProps.filedetails.status,
    );
    expect(findById("filename").first().text()).toEqual(initProps.head.title);
    expect(findById("location").first().text()).toEqual("Demo");
    expect(findById("source").first().text()).toEqual("Source");
  });

  it("populates the description details", () => {
    expect(findById("description").first().text()).toEqual(
      initProps.description,
    );
  });

  it("populates the tech details", () => {
    expect(findById("tech").first().text()).toEqual(
      initProps.tech.map(t => t).join(""),
    );
  });

  it("populates the snapshots", () => {
    const { snapshotdirectory, snapshots } = initProps;

    const snapshot = findById("snapshots").first();
    expect(snapshot.find("CardTitle").first().text()).toEqual(
      snapshots[0].title,
    );
    expect(snapshot.find("Image").first().props().src).toEqual(
      `projects/${snapshotdirectory}/${snapshots[0].src}Min`,
    );
    expect(snapshot.find("Image").first().props().alt).toEqual(
      snapshots[0].alt,
    );
  });

  it("displays a modal", () => {
    wrapper.find("PreviewCard").first().simulate("click");
    expect(wrapper.find("Modal").first().prop("isOpen")).toBeTruthy();
  });

  it("populates the file details with active project", () => {
    const status = "In Orbit";
    const activeProps = {
      ...initProps,
      filedetails: {
        ...initProps.filedetails,
        active: true,
        status,
      },
    };

    wrapper = mount(<Page {...activeProps} />);

    expect(findById("status").first().text()).toEqual(status);

    expect(wrapper.find("BsFillCircleFill").first()).toHaveStyle(
      "color",
      "limegreen",
    );
  });
});
