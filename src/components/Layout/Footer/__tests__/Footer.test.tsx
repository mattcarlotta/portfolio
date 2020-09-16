import { mount } from "enzyme";
import Footer from "../index";

const wrapper = mount(<Footer />);

describe("Footer", () => {
  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='footer']")).toExist();
  });
});
