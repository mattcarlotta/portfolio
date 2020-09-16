import styled from "styled-components";

const ModalContent = styled.div<{ isLoaded?: boolean }>`
  width: 100%;
  height: calc(100% - 96px);
  padding: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  color: #0096ff;
  text-shadow: 0px 0px 0.5px #fff;
  text-align: left;
  z-index: 200;
  flex-direction: column;
  visibility: ${({ isLoaded }) => (isLoaded ? "visible" : "hidden")};
`;

export default ModalContent;
