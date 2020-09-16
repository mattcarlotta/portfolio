import { mount } from "enzyme";
import Header from "../index";

const wrapper = mount(<Header />);

describe("Header", () => {
  it("renders without errors", () => {
    expect(wrapper.find("Header").exists()).toBeTruthy();
  });
});
