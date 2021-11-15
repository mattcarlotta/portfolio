import { mount } from "enzyme";
import Header from "../index";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const initProps = {
  title: "Home",
  url: "/",
};

const wrapper = mount(<Header {...initProps} />);

describe("Header", () => {
  it("renders without errors", () => {
    expect(wrapper.find("Head")).toExist();
  });
});
