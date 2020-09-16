import { mount, ReactWrapper } from "enzyme";
import FlexCenter from "../index";

describe("FlexCenter", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<FlexCenter />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
    expect(wrapper).toHaveStyleRule("flex-direction", "column");
  });

  it("sets 'flex-direction' to a 'row' when passed a 'direction' prop", () => {
    wrapper.setProps({ direction: "row" });
    expect(wrapper).toHaveStyleRule("flex-direction", "row");
  });
});
