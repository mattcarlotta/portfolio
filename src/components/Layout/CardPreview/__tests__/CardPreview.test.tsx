import { mount } from "enzyme";
import CardPreview from "../index";

const initProps = {
  active: true,
  alt: "portait",
  ariaLabel: "Navigate to example page.",
  description: "Example description.",
  href: "12345",
  idx: 1,
  location: "https://example.com",
  source: "http://example.com",
  src: "me",
  status: "In Orbit",
  title: "example project",
  url: "123456",
};

const wrapper = mount(<CardPreview {...initProps} />);

describe("Image", () => {
  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='picture']")).toExist();
  });

  it("renders inactive projects", () => {
    wrapper.setProps({ active: false });
    expect(wrapper.find("FiPower")).toHaveStyle("color", "#2c4776");
  });
});
