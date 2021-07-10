import { mount } from "enzyme";
import CardPreview from "../index";

const initProps = {
  idx: 1,
  title: "Hello",
  src: "me",
  alt: "portait",
  description: "Example description.",
};

const wrapper = mount(<CardPreview {...initProps} />);

describe("Image", () => {
  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='picture']")).toExist();
  });
});
