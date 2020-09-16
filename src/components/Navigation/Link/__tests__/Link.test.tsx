import { mount } from "enzyme";
import Link from "../index";

const initProps = {
  ariaLabel: "Navigate to test",
  className: "Test",
  children: "Test",
  dataTestId: "link",
  href: "/",
};

const wrapper = mount(<Link {...initProps} />);

describe("Styled Link", () => {
  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='link']")).toExist();
  });
});
