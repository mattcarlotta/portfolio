import { fireEvent, render, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import ModalDialog from "../index";

const props = {
  snapshots: [
    {
      url: "https://images.ctfassets.net/hb5otnhwin4m/sDOSuByzAmp1FWwti4xy0/c9f454201c2d9a710952434792f3cc1e/sjsiceteamDashboard.png",
      description:
        "A dashboard that is laid out with a navbar bar that extends across the top of the page and sidebar along the right with clickable links that extends to the bottom of the page, a sidebar with clickable links that extends all the way down the left of the page. These bars frame 4 panels to the right: An Events panel, a Forms panel, an Availability panel and an Event Distribution chart panel.",
      contentType: "image/png",
      height: 912,
      width: 1828,
      title: "example 123",
    },
    {
      url: "https://images.ctfassets.net/hb5otnhwin4m/7yKDglorrZ2rF2Ygyx1ZIh/0bbf2e65890b8ffa5525625aa4b74830/sjsiceteamEmailEventReminder.png",
      description:
        "A preview of an email that contains an event reminder which contains the event's location, date and the member's call-time.",
      contentType: "image/png",
      height: 979,
      width: 1805,
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

    await waitFor(() => {
      userEvent.tab();
    });

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

    await waitFor(() => {
      userEvent.keyboard("{arrowright}");
    });

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

    await waitFor(() => {
      userEvent.keyboard("{arrowleft}");
    });

    await waitFor(() => {
      expect(
        within(getByTestId("modal-title")).getByText("example 456"),
      ).toBeInTheDocument();
    });
  });

  it("pressing shift+tab keys navigates to previous image", async () => {
    const { getByTestId } = render(<ModalDialog {...props} />);

    fireEvent.click(getByTestId("example 123"));

    await waitFor(() => {
      expect(document.querySelector("#modal")).toBeInTheDocument();
    });

    await waitFor(() => {
      userEvent.tab({ shift: true });
    });

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

    await waitFor(() => {
      userEvent.keyboard("{esc}");
    });

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

    await waitFor(() => {
      userEvent.keyboard("{arrowup}");
    });

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
