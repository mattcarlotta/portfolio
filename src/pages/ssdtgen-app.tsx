import Page from "~components/Layout/Page";
import { ReactElement } from "~types";

const SSDTGenApp = (): ReactElement => (
  <Page
    description="A standalone app that attempts to build and compile custom SSDTs (system service descriptor Tables) for x99/z170/z97/h97 systems running Mac OS. Specifically, it will inject properties into the system&#39;s ACPI (advanced configuration and power interface) tables for: on-board sound, an external GPU/HDMI audio, SSATA contoller, ethernet, IMEI controller, LPC support, NMVe devices, Sata controller, SBUS controller, XHC USB power options, and XOSI support."
    head={{
      title: "ssdtGen App",
      url: "/ssdtgen-app",
      description:
        "A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS.",
    }}
    filedetails={{
      active: false,
      status: "Archived",
      source: "https://github.com/mattcarlotta/ssdtGenApp",
    }}
    snapshotdirectory="ssdtgenapp"
    snapshots={[
      {
        src: "ssdtgenappPreview",
        alt: "app-preview",
        title: "app",
      },
      {
        src: "ssdtgenappExample",
        alt: "example-preview",
        title: "ex. ssdt",
      },
      {
        src: "ssdtgenappLogo",
        alt: "logo-preview",
        title: "logo",
      },
    ]}
    tech={["bash", "swift", "asl"]}
  />
);

export default SSDTGenApp;
