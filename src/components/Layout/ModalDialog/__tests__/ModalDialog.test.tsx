import { fireEvent, render, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
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

// const events = { keydown: null } as any;
// window.addEventListener = (event: any, cb: any) => {
//   events[event] = cb;
// };

// window.document.getElementById = jest.fn();

describe("ModalDialog", () => {
  //   let wrapper: ReactWrapper;
  //   let findById: (id: string) => ReactWrapper;
  //   beforeEach(() => {
  //     wrapper = mount(<ModalDialog {...props} />);
  //     findById = id => wrapper.find(`[data-testid='${id}']`);
  //   });

  it("renders without errors", () => {
    const { getByTestId } = render(<ModalDialog {...props} />);
    expect(getByTestId("snapshots")).toBeInTheDocument();
  });

  it("opens a modal dialog when clicking on a snapshot", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });
  });

  it("navigates the snapshots when clicking on the 'next-image' or 'previous-image' buttons", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("next-image"));

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 456"),
      ).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("previous-image"));

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 123"),
      ).toBeInTheDocument();
    });
  });

  it("wraps around to the first image when clicking on the 'next-image' button", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 456"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("next-image"));

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 123"),
      ).toBeInTheDocument();
    });
  });

  it("wraps around to the last image clicking on the 'previous-image' button", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("previous-image"));

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 456"),
      ).toBeInTheDocument();
    });
  });

  it("navigates to an image when clicking on a preview of it", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("button-example 456"));

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 456"),
      ).toBeInTheDocument();
    });
  });

  it("pressing tab navigates to next image", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    userEvent.tab();

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 456"),
      ).toBeInTheDocument();
    });
  });

  it("pressing arrowright key navigates to next image", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    userEvent.keyboard("{arrowright}");

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 456"),
      ).toBeInTheDocument();
    });
  });

  it("pressing arrowleft key navigates to previous image", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    userEvent.keyboard("{arrowleft}");

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 456"),
      ).toBeInTheDocument();
    });
  });

  it("pressing esc key closes the modal", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    userEvent.keyboard("{esc}");

    await waitFor(() => {
      expect(document.querySelector("#modal")).not.toBeInTheDocument();
    });
  });

  it("pressing arrowup key does nothing", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    userEvent.keyboard("{arrowup}");

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });
  });

  it("opens the modal when pressing enter key on a snapshot preview", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.keyDown(getByTestId("example 123"), { key: "Enter" });

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });
  });

  it("doesn't open the modal when pressing an invalid key on a snapshot preview", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.keyDown(getByTestId("example 123"), { key: "ArrowUp" });

    await waitFor(() => {
      expect(document.querySelector("#modal")).not.toBeInTheDocument();
    });
  });
});
