import { mount } from "enzyme";
import { waitForAct } from "@noshot/utils";
import Image from "../index";

const initProps = {
  alt: "example",
  src: "example",
};

describe("Image", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<Image {...initProps} />);
  });

  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='picture']")).toExist();
  });

  it("calls onClick", () => {
    wrapper.find("[data-testid='picture']").first().simulate("click");
  });

  it("calls handleImageLoaded on failure and displays the broken link icon", async () => {
    await waitForAct(() => {
      wrapper.find("img").props().onError();
      wrapper.update();

      expect(wrapper.find("BrokenImage")).toExist();
    });
  });
});
