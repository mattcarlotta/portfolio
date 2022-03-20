import { render } from "@testing-library/react";
import { within } from "@testing-library/dom";
import ProjectPage from "../index";

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
  sys: {
    id: "3lvQ1r9GjrW1eNjuk1cbr7",
  },
  title: "rusty bucket",
  seoDescription:
    "A custom built Rust API server to dynamically resize images based upon a URL query.",
  active: false,
  status: "Decomissioned",
  location: null,
  source: "https://github.com/mattcarlotta/image-api",
  description: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "Window aspect ratios vary from device to device, therefore serving a 3840×2160 pixel image to a 640x480 client viewport is a waste of bandwidth and may result in image distortion or extremely large client windows. However, utilizing a HTML ",
              nodeType: "text",
            },
            {
              data: {
                uri: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture",
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: "picture",
                  nodeType: "text",
                },
              ],
              nodeType: "hyperlink",
            },
            {
              data: {},
              marks: [],
              value: " element or an image ",
              nodeType: "text",
            },
            {
              data: {
                uri: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset",
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: "src-set",
                  nodeType: "text",
                },
              ],
              nodeType: "hyperlink",
            },
            {
              data: {},
              marks: [],
              value:
                " attribute, the browser can dynamically choose which image to load based upon the client's viewport.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "This custom built API aims to utilize the above by offering on-the-fly image manipulation. By requesting an image with some additional URL queries, the API interprets the provided queries and down-samples and/or converts the image at request time.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                "All unique image requests are then stored into a LRU cache on initial request; therefore, any subsequent requests will be served an encoded image from this cache instead of reading/encoding the file from disk. As a result, creating dynamically resized images can be viewed in milliseconds! No more wasted bandwidth serving large images to the client; meanwhile, the client downloads and views an optimized resolution for their view port!",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: "To visualize how the API works, take a look at this ",
              nodeType: "text",
            },
            {
              data: {
                uri: "https://github.com/mattcarlotta/image-api#flow-chart",
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: "flow chart",
                  nodeType: "text",
                },
              ],
              nodeType: "hyperlink",
            },
            {
              data: {},
              marks: [],
              value: " which breaks down the client to API interaction.",
              nodeType: "text",
            },
          ],
          nodeType: "paragraph",
        },
      ],
      nodeType: "document",
    },
  },
  tech: ["rust", "nginx", "pm2"],
  snapshotsCollection: {
    items: [],
  },
  preview: {
    url: "https://images.ctfassets.net/hb5otnhwin4m/7lUEgIvAbRze7BvvezKPMy/d04aaa477ce728779e5e24c14c2c8356/rustybucketPreview.png",
    contentType: "image/png",
    height: 200,
    width: 200,
    title: "rusty bucket preview",
  },
  slug: "rusty-bucket",
};

describe("Project Page", () => {
  // it("populates the head with a title, url, description, and type", () => {
  //   const { getByTestId } = render(<Page {...initProps} />);
  //   const head = wrapper.find("Header");
  //   expect(head.prop("title")).toEqual(initProps.head.title);
  //   expect(head.prop("url")).toEqual(initProps.head.url);
  //   expect(head.prop("description")).toEqual(initProps.head.description);
  // });

  it("populates the panel title", () => {
    const { getByTestId } = render(<ProjectPage {...initProps} />);
    expect(
      within(getByTestId("panel-title")).getByText(initProps.title),
    ).toBeInTheDocument();
  });

  it("renders the solar system", () => {
    const { getByTestId } = render(<ProjectPage {...initProps} />);
    expect(getByTestId("solar-system")).toBeInTheDocument();
  });

  it("populates the file details", () => {
    const { getByTestId } = render(<ProjectPage {...initProps} />);
    expect(
      within(getByTestId("status")).getByText(initProps.status),
    ).toBeInTheDocument();
    expect(
      within(getByTestId("filename")).getByText(initProps.title),
    ).toBeInTheDocument();
    expect(
      within(getByTestId("location")).getByText("Demo"),
    ).toBeInTheDocument();
    expect(
      within(getByTestId("source")).getByText("Source"),
    ).toBeInTheDocument();
  });

  it("populates the description details", () => {
    const { getByTestId } = render(<ProjectPage {...initProps} />);
    expect(
      within(getByTestId("description")).getByText(/With the help of the/),
    ).toBeInTheDocument();
  });

  it("populates the tech details", () => {
    const { getByTestId } = render(<ProjectPage {...initProps} />);
    expect(within(getByTestId("tech")).getByText(/Babel/)).toBeInTheDocument();
  });

  it("populates the snapshots", () => {
    const { queryAllByTestId } = render(<ProjectPage {...initProps} />);
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
