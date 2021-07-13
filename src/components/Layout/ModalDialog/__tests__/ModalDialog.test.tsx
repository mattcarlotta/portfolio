import { mount, ReactWrapper } from "enzyme";
import { waitForAct } from "@noshot/utils";
import ModalDialog from "../index";

const props = {
  snapshotdirectory: "example",
  snapshots: [
    {
      src: "example/123",
      alt: "example-123-preview",
      title: "example 123",
    },
    {
      src: "example/456",
      alt: "example-456-preview",
      title: "example 456",
    },
  ],
};

const events = { keydown: null } as any;
window.addEventListener = (event: any, cb: any) => {
  events[event] = cb;
};

describe("ModalDialog", () => {
  let wrapper: ReactWrapper;
  let findById: (id: string) => ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<ModalDialog {...props} />);
    findById = id => wrapper.find(`[data-testid='${id}']`);
  });

  it("renders without errors", () => {
    expect(findById("snapshots")).toExist();
  });

  it("clicking on a snapshot opens a modal dialog", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
    });
  });

  it("clicking on the 'next-image' or 'previous-image' navigates the snapshots", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
    });

    findById("next-image").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 456");
    });

    findById("previous-image").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 123");
    });
  });

  it("clicking on the 'next-image' wraps around to the first image", async () => {
    findById("example 456").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
    });

    findById("next-image").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 123");
    });
  });

  it("clicking on the 'previous-image' wraps around to the last image", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
    });

    findById("previous-image").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 456");
    });
  });

  it("clicking on a preview image navigates to it", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
    });

    findById("button-example 456").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 456");
    });
  });

  it("pressing tab navigates to next image", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
      events.keydown({ key: "Tab" });
    });

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 456");
    });
  });

  it("pressing arrowright key navigates to next image", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
      events.keydown({ key: "ArrowRight" });
    });

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 456");
    });
  });

  it("pressing arrowleft key navigates to previous image", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
      events.keydown({ key: "ArrowLeft" });
    });

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title").at(1)).toHaveText("example 456");
    });
  });

  it("pressing esc key closes the modal", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
      events.keydown({ key: "Escape" });
    });

    await waitForAct(() => {
      wrapper.update();

      expect(findById("modal-title")).not.toExist();
    });
  });

  it("pressing arrowup key does nothing", async () => {
    findById("example 123").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
      events.keydown({ key: "ArrowUp" });
    });

    await waitForAct(() => {
      wrapper.update();

      expect(wrapper.find("#modal")).toExist();
    });
  });
});
