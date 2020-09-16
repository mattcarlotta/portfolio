import Page from "~components/Layout/Page";
import { FC } from "~types";

const SSDTGenApp: FC = (): JSX.Element => (
  <Page
    description="A standalone app that attempts to build and compile custom SSDTs (System Service Descriptor Tables) for X99/Z170/Z97/H97 systems running Mac OS. Specifically, it will inject properties into the system&#39;s ACPI (Advanced Configuration and Power Interface) tables for: on-board sound, an external GPU/HDMI audio, sSata Contoller, ethernet, IMEI controller, LPC support, NVMe devices, Sata Controller, SBUS controller, XHC usb power options, and XOSI support."
    head={{
      title: "ssdtGen App",
      url: "/ssdtgen-app",
      description:
        "A standalone Mac OS application that builds and compiles custom SSDTs for X99, Z170, Z97, and H97 systems running Mac OS.",
    }}
    filedetails={{
      active: true,
      status: "Archived",
      source: "https://github.com/mattcarlotta/ssdtGenApp",
    }}
    snapshotdirectory="ssdtgenapp"
    snapshots={[
      {
        src: "ssdtgenappLogo",
        alt: "logo-preview",
        title: "Logo",
      },
      {
        src: "ssdtgenappPreview",
        alt: "app-preview",
        title: "App",
      },
      {
        src: "ssdtgenappExample",
        alt: "example-preview",
        title: "Ex. SSDT",
      },
    ]}
    tech={["Bash", "Swift", "ASL"]}
  />
);

export default SSDTGenApp;
