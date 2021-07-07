import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { ReactElement } from "~types";

const AutorunGCNDriver = (): ReactElement => (
  <Page
    description={
      <>
        A program that automates opening the&nbsp;
        <OutsideLink
          ariaLabel="Navigate to gcn-usb-adapter source page"
          href="https://bitbucket.org/elmassivo/gcn-usb-adapter/src/master/"
          padding="0"
        >
          GCN USB Adapter
        </OutsideLink>
        &nbsp;by loading the adapter, pressing the &lsquo;Start&lsquo; button
        and then searching through the vJoy devices to find which vJoy device is
        active:&nbsp;
        <OutsideLink
          ariaLabel="Navigate to youtube video"
          href="https://youtu.be/nA50Wlv3K_M"
          padding="0"
        >
          video
        </OutsideLink>
        .
      </>
    }
    head={{
      title: "Autorun GCN Driver",
      url: "/autorun-gcn-driver",
      description:
        "A program that replaces manually opening the GCN USB Adapter, pressing the 'Start' button and then searching through the vJoy devices to find which vJoy device is active.",
    }}
    filedetails={{
      active: true,
      status: "In Orbit",
      source: "https://github.com/mattcarlotta/autorunGCNDriver",
    }}
    snapshotdirectory="autorungcn"
    snapshots={[
      {
        src: "autorunGCNPreview",
        alt: "autorunGCN-logo-preview",
        title: "logo",
      },
    ]}
    tech={["AutoIt", "GCN USB Adapter"]}
  />
);

export default AutorunGCNDriver;
