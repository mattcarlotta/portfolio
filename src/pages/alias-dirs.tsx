import * as React from "react";
import Page from "~components/Layout/Page";
import OutsideLink from "~components/Navigation/OutsideLink";
import { NextPage } from "~types";

const AliasDirs: NextPage = () => (
  <Page
    description={
      <>
        with the help of the&nbsp;
        <OutsideLink
          ariaLabel="Navigate to babel-plugin-module-resolver home page"
          href="https://github.com/tleunen/babel-plugin-module-resolver"
          padding="0"
        >
          babel-plugin-module-resolver
        </OutsideLink>
        , this npm package traverses a project&#39;s <i>src</i> directory and
        automatically creates aliased imports for babel.
      </>
    }
    head={{
      title: "Alias Dirs",
      url: "/alias-dirs",
      description:
        "Automatically creates aliased import directories for babel.",
    }}
    filedetails={{
      active: false,
      status: "Decommissioned",
      source: "https://github.com/mattcarlotta/alias-dirs",
    }}
    tech={["babel", "enzyme", "javascript", "jest", "rollupjs"]}
  />
);

export default AliasDirs;
