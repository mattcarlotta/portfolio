import { mount, ReactWrapper } from "enzyme";
import Flex from "../index";

describe("Flex", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Flex data-testid="flex" />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
    expect(wrapper).toHaveStyleRule("flex-direction", "row");
    expect(wrapper).toHaveStyleRule("flex-wrap", "nowrap");
    expect(wrapper).toHaveStyleRule("justify-content", "start");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    wrapper.setProps({ direction: "column" });
    expect(wrapper).toHaveStyleRule("flex-direction", "column");
  });

  it("sets 'flex-wrap' as a 'wrap' when passed a 'wrap' prop", () => {
    wrapper.setProps({ flexwrap: "true" });
    expect(wrapper).toHaveStyleRule("flex-wrap", "wrap");
  });

  it("sets 'justify-content' as a 'center' when passed a 'justify' prop", () => {
    wrapper.setProps({ justify: "center" });
    expect(wrapper).toHaveStyleRule("justify-content", "center");
  });

  it("sets height when passed a 'height' prop", () => {
    wrapper.setProps({ height: "10px" });
    expect(wrapper).toHaveStyleRule("height", "10px");
  });

  it("sets margin when passed a 'margin' prop", () => {
    wrapper.setProps({ margin: "10px" });
    expect(wrapper).toHaveStyleRule("margin", "10px");
  });

  it("sets width when passed a 'width' prop", () => {
    wrapper.setProps({ width: "10px" });
    expect(wrapper).toHaveStyleRule("width", "10px");
  });
});
