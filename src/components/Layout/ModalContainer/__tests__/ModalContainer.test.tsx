import { mount } from "enzyme";
import ModalContainer from "../index";

const wrapper = mount(
  <ModalContainer>
    {(isOpen, selected, toggleModal) => (
      <>
        <button type="button" onClick={() => toggleModal("abc")}>
          Click me
        </button>
        <span data-testid="isopen">{String(isOpen)}</span>
        <span data-testid="selected">{selected}</span>
      </>
    )}
  </ModalContainer>,
);

describe("Modal Container", () => {
  it("it renders without errors", () => {
    expect(wrapper.find("button").exists()).toBeTruthy();
  });

  it("toggled isOpen state", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("[data-testid='isopen']").text()).toEqual("true");
    expect(wrapper.find("[data-testid='selected']").text()).toEqual("abc");

    wrapper.find("button").simulate("click");
    expect(wrapper.find("[data-testid='isopen']").text()).toEqual("false");
    expect(wrapper.find("[data-testid='selected']").text()).toEqual("");
  });
});
