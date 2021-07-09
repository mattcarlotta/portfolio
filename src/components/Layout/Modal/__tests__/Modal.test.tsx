import { SyntheticEvent } from "react";
import { mount } from "enzyme";
import { waitForAct } from "@noshot/utils";
import Modal from "../index";

const image = new global.Image();
image.src =
  "data:image/png;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";

const Image = ({
  alt,
  handleImageLoaded,
  src,
}: {
  alt: string;
  handleImageLoaded?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
  src: any;
}) => (
  <img
    src={src}
    alt={alt}
    onLoad={handleImageLoaded}
    onError={handleImageLoaded}
  />
);

const onClick = jest.fn();

const initProps = {
  children: <h1>Example Modal Content</h1>,
  isOpen: false,
  onClick,
};

const wrapper: any = mount(
  <Modal {...initProps}>
    <Image src={image} alt="example" />
  </Modal>,
);

describe("Modal", () => {
  it("initially renders nothing", () => {
    expect(wrapper.find("ModalContainer").exists()).toBeFalsy();
  });

  it("renders a modal with some sample content without errors", async () => {
    wrapper.setProps({ isOpen: true });

    await waitForAct(() => {
      wrapper.find("img").props().onLoad();
      wrapper.update();

      expect(wrapper.find("Container").exists()).toBeTruthy();
      expect(wrapper.find("ModalContent").props().isLoaded).toBeTruthy();
    });
  });

  it("calls a passed in 'onClick' prop function", () => {
    wrapper.setProps({ onClick });

    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("closes the modal", () => {
    wrapper.setProps({ isOpen: false });
    expect(wrapper.find("ModalContainer").exists()).toBeFalsy();
  });
});
