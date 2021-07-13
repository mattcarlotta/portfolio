import { mount, ReactWrapper } from "enzyme";
import Button from "../index";

describe("Button", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Button data-testid="flex" />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
    expect(wrapper).toHaveStyleRule("color", "#1f1f1f");
    expect(wrapper).toHaveStyleRule("height", "auto");
    expect(wrapper).toHaveStyleRule("width", "auto");
    expect(wrapper).toHaveStyleRule("color", "#1f1f1f", { target: "hover" });
  });

  it("sets 'color' when passed a 'clickable' prop", () => {
    wrapper.setProps({ clickable: true });

    expect(wrapper).toHaveStyleRule("color", "#fff");
    expect(wrapper).toHaveStyleRule("color", "#0080ff", { target: "hover" });
  });

  it("sets height when passed a 'height' prop", () => {
    wrapper.setProps({ height: "10px" });
    expect(wrapper).toHaveStyleRule("height", "10px");
  });

  it("sets width when passed a 'width' prop", () => {
    wrapper.setProps({ width: "10px" });
    expect(wrapper).toHaveStyleRule("width", "10px");
  });
});
