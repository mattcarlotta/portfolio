import styled from "@emotion/styled";
import Bars from "~components/Layout/Bars";

const PanelBody = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 2px solid transparent;
  overflow: hidden;
  text-align: left;
  background-color: transparent;
  color: #0088ff;
  box-shadow: inset -1px -1px 24px -1px rgba(101, 130, 255, 0.25),
    0px 0px 26px -2px rgba(0, 64, 255, 1);
  border-image: linear-gradient(to top, #73b9ff 0%, #005193 50%, #005193 100%);
  border-image-slice: 1;

  ${Bars} {
    .bar1,
    .bar2,
    .bar3 {
      opacity: 1;
    }
  }
`;

export default PanelBody;
