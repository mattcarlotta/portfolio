import { mount, ReactWrapper } from "enzyme";
import FlexSpaceAround from "../index";

describe("FlexSpaceAround", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<FlexSpaceAround />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
    expect(wrapper).toHaveStyleRule("flex-direction", "row");
    expect(wrapper).toHaveStyleRule("justify-content", "space-around");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    wrapper.setProps({ direction: "column" });
    expect(wrapper).toHaveStyleRule("flex-direction", "column");
  });

  it("sets media query when passed a 'breakpoint' prop", () => {
    wrapper.setProps({ breakpoint: true });
    expect(wrapper).toHaveStyleRule("flex-wrap", "wrap", {
      media: "(max-width: 500px)",
    });
  });
});
