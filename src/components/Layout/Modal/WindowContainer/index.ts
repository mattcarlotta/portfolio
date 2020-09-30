import styled from "@emotion/styled";

const WindowContainer = styled.div`
  text-align: center;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  z-index: 100;

  :before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
`;

export default WindowContainer;
