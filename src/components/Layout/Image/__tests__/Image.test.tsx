import { mount } from "enzyme";
import { waitForAct } from "@noshot/utils";
import Image from "../index";

const initProps = {
  placeholder: true,
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

  it("renders a placeholder", () => {
    expect(wrapper.find("[data-testid='placeholder']")).toExist();
  });

  it("on success loads an image", async () => {
    await waitForAct(() => {
      wrapper.find("img").props().onLoad();
      wrapper.update();

      expect(
        wrapper.find("[data-testid='placeholder']").first(),
      ).toHaveStyleRule("display", "none");
    }, 1000);
  });

  it("on failure displays a broken link icon", async () => {
    await waitForAct(() => {
      wrapper.find("img").props().onError();
      wrapper.update();

      expect(wrapper.find("BrokenImage")).toExist();
    });
  });
});
