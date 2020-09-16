import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import Image from "../index";

const flushPromises = () => new Promise(setImmediate);

const onClick = jest.fn();
const handleImageLoaded = jest.fn();

const initProps = {
  alt: "example",
  handleImageLoaded,
  onClick,
  src: "example",
};

describe("Image", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<Image {...initProps} />);
  });

  afterEach(() => {
    handleImageLoaded.mockClear();
    onClick.mockClear();
  });

  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='picture']")).toExist();
  });

  it("calls onClick", () => {
    wrapper.find("[data-testid='picture']").first().simulate("click");
  });

  it("calls handleImageLoaded on load", async () => {
    await act(async () => {
      wrapper.find("img").props().onLoad();
      await flushPromises();
      wrapper.update();

      expect(handleImageLoaded).toHaveBeenCalledTimes(1);
    });
  });

  it("calls handleImageLoaded on failure and displays the broken link icon", async () => {
    await act(async () => {
      wrapper.find("img").props().onError();
      await flushPromises();
      wrapper.update();

      expect(handleImageLoaded).toHaveBeenCalledTimes(1);
      expect(wrapper.find("BrokenImage")).toExist();
    });
  });
});
