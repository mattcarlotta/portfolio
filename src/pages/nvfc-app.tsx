import Page from "~components/Layout/Page";
import { FC } from "~types";

const NVFCApp: FC = (): JSX.Element => (
  <Page
    description=" A standalone Linux application that creates a modifiable 2D curve of temp and fan speed points that automatically controls a Nvidia GPU&#39;s fan based on the GPU&#39;s temperature."
    head={{
      title: "Nvidia Fan Controller (nvfc) App",
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
        title: "Logo",
      },
      {
        src: "nvfcappPreview",
        alt: "system-info-preview",
        title: "System Info",
      },
    ]}
    tech={["Python3", "Matplotlib", "Pip3", "PyGTK", "Nvidia drivers"]}
  />
);

export default NVFCApp;
