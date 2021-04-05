import * as React from "react";
import Page from "~components/Layout/Page";
import { NextPage } from "~types";

const NVFCApp: NextPage = () => (
  <Page
    description="a standalone linux application that creates a modifiable 2d curve of temp and fan speed points that automatically controls a nvidia gpu&#39;s fan based on the gpu&#39;s temperature."
    head={{
      title: "fan controller (nvfc) app",
      url: "/nvfc-app",
      description:
        "A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU's fan based on the GPU's temperature.",
    }}
    filedetails={{
      active: true,
      status: "Archived",
      source: "https://github.com/mattcarlotta/nvfcApp",
    }}
    snapshotdirectory="nvfcapp"
    snapshots={[
      {
        src: "nvfcappLogo",
        alt: "logo-preview",
        title: "logo",
      },
      {
        src: "nvfcappPreview",
        alt: "system-info-preview",
        title: "system info",
      },
    ]}
    tech={["python3", "matplotlib", "pip3", "pygtk", "nvidia drivers"]}
  />
);

export default NVFCApp;
