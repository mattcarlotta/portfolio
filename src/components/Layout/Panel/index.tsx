import React from "react";
import PanelBody from "~components/Layout/PanelBody";
import PanelContainer from "~components/Layout/PanelContainer";
import Bars from "~components/Layout/Bars";
import Solar from "~components/Layout/Solar";
import { ReactNode } from "~types";

const Panel = ({ children }: { children: ReactNode }) => (
  <PanelContainer>
    <Solar />
    <PanelBody>
      <Bars />
      {children}
    </PanelBody>
  </PanelContainer>
);

export default Panel;
