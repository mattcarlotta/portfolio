import styled from "@emotion/styled";

const BackgroundOverlay = styled.div`
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  position: fixed;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default BackgroundOverlay;
