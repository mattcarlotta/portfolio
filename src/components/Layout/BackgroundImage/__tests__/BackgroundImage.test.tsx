import { mount, ReactWrapper } from "enzyme";
import { BackgroundImage } from "../index";

const src = "/projects/123";

describe("BackgroundImage", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<BackgroundImage src={src} supportsWebp />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
    expect(wrapper).toHaveStyleRule("background-image", `url(${src}.webp)`);
  });

  it("adjusts the background image when 'supportsWebp' is false", () => {
    wrapper.setProps({ supportsWebp: false });

    expect(wrapper).toHaveStyleRule("background-image", `url(${src}.png)`);
  });
});
