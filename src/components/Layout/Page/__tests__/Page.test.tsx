import { mount } from "enzyme";
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

let wrapper: any = mount(<Page {...initProps} />);

describe("Page", () => {
  it("renders without errors", () => {
    expect(wrapper.find("Page")).toExist();
  });

  it("populates the head with a title, url, description, and type", () => {
    const head = wrapper.find("Header");
    expect(head.props().title).toEqual(initProps.head.title);
    expect(head.props().url).toEqual(initProps.head.url);
    expect(head.props().description).toEqual(initProps.head.description);
  });

  it("populates the panel title", () => {
    expect(wrapper.find("PanelTitle").text()).toEqual(initProps.head.title);
  });

  it("renders the solar system", () => {
    expect(wrapper.find("[data-testid='solar-system']")).toExist();
  });

  it("populates the file details", () => {
    expect(wrapper.find("[data-testid='status']").first().text()).toEqual(
      initProps.filedetails.status,
    );
    expect(wrapper.find("[data-testid='filename']").first().text()).toEqual(
      initProps.head.title,
    );
    expect(wrapper.find("[data-testid='location']").first().text()).toEqual(
      initProps.filedetails.location,
    );
    expect(wrapper.find("[data-testid='source']").first().text()).toEqual(
      initProps.filedetails.source,
    );
  });

  it("populates the description details", () => {
    expect(wrapper.find("[data-testid='description']").first().text()).toEqual(
      initProps.description,
    );
  });

  it("populates the tech details", () => {
    expect(wrapper.find("[data-testid='tech']").first().text()).toEqual(
      initProps.tech.map(t => t).join(""),
    );
  });

  it("populates the snapshots", () => {
    const { snapshotdirectory, snapshots } = initProps;

    const snapshot = wrapper.find("[data-testid='snapshots']").first();
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
    expect(wrapper.find("Modal").first().props().isOpen).toBeTruthy();
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

    expect(wrapper.find("[data-testid='status']").first().text()).toEqual(
      status,
    );

    expect(wrapper.find("BsFillCircleFill").first()).toHaveStyle(
      "color",
      "limegreen",
    );
  });
});
