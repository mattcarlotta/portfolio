import { mount } from "enzyme";
import { waitForAct } from "@noshot/utils";
import Image from "../index";

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
    await waitForAct(() => {
      wrapper.find("img").props().onLoad();
      wrapper.update();

      expect(handleImageLoaded).toHaveBeenCalledTimes(1);
    });
  });

  it("calls handleImageLoaded on failure and displays the broken link icon", async () => {
    await waitForAct(() => {
      wrapper.find("img").props().onError();
      wrapper.update();

      expect(handleImageLoaded).toHaveBeenCalledTimes(1);
      expect(wrapper.find("BrokenImage")).toExist();
    });
  });
});
