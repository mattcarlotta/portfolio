import * as React from "react";
import Page from "~components/Layout/Page";
import { NextPage } from "~types";

const SSDTGenApp: NextPage = () => (
  <Page
    description="a standalone app that attempts to build and compile custom ssdts (system service descriptor Tables) for x99/z170/z97/h97 systems running mac os. specifically, it will inject properties into the system&#39;s acpi (advanced configuration and power interface) tables for: on-board sound, an external gpu/hdmi audio, ssata contoller, ethernet, imei controller, lpc support, nvme devices, sata controller, sbus controller, xhc usb power options, and xosi support."
    head={{
      title: "ssdtgen app",
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
