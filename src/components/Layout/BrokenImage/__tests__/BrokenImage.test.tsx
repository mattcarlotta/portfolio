import { mount } from "enzyme";
import BrokenImage from "../index";

const wrapper = mount(<BrokenImage />);

describe("Broken Image", () => {
  it("renders without errors", () => {
    const node = wrapper.find("[data-testid='broken-image']");
    expect(node).toExist();
    expect(node.text()).toContain("Unable to load image");
  });
});
