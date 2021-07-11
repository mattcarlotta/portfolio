import { mount, ReactWrapper } from "enzyme";
import Padding from "../index";

describe("Padding Component", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Padding />);
  });

  it("initially renders a default padding", () => {
    expect(wrapper).toExist();
    expect(wrapper).toHaveStyleRule("padding-top", "0px");
    expect(wrapper).toHaveStyleRule("padding-right", "0px");
    expect(wrapper).toHaveStyleRule("padding-bottom", "0px");
    expect(wrapper).toHaveStyleRule("padding-left", "0px");
  });

  it("sets a media rule when passed a 'breakpoint' prop", () => {
    wrapper.setProps({ breakpoint: "true" });
    expect(wrapper).toHaveStyleRule("padding-left", "0", {
      media: "(max-width: 610px)",
    });
    expect(wrapper).toHaveStyleRule("padding-right", "0", {
      media: "(max-width: 610px)",
    });
  });

  it("sets padding-top when passed a 'top' prop", () => {
    wrapper.setProps({ top: "10px" });
    expect(wrapper).toHaveStyleRule("padding-top", "10px");
  });

  it("sets padding-right when passed a 'right' prop", () => {
    wrapper.setProps({ right: "10px" });
    expect(wrapper).toHaveStyleRule("padding-right", "10px");
  });

  it("sets padding-bottom when passed a 'bottom' prop", () => {
    wrapper.setProps({ bottom: "10px" });
    expect(wrapper).toHaveStyleRule("padding-bottom", "10px");
  });

  it("sets padding-left when passed a 'left' prop", () => {
    wrapper.setProps({ left: "10px" });
    expect(wrapper).toHaveStyleRule("padding-left", "10px");
  });
});
