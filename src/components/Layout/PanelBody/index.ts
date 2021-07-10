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
