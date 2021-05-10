import Page from "~components/Layout/Page";
import { ReactElement } from "~types";

const NVFCApp = (): ReactElement => (
  <Page
    description="A standalone Linux application that creates a modifiable 2D curve of temperature to fan speed percentage points. These points will then control an Nvidia GPU&#39;s fan based on its temperature."
    head={{
      title: "Fan Controller (nvfc) App",
      url: "/nvfc-app",
      description:
        "A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU's fan based on the GPU's temperature.",
    }}
    filedetails={{
      active: false,
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
