/* istanbul ignore file */
import styled from "@emotion/styled";

const ImagePreviewButton = styled.button<{ active: boolean }>`
  cursor: pointer;
  margin: 0 5px;
  padding: 0px;
  height: 75px;
  width: 75px;
  overflow: hidden;
  border-radius: 4px;
  border: 3px solid ${({ active }) => (active ? "#0080ff" : "transparent")};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  transition: all 300ms ease-in-out;

  :hover {
    opacity: 1;
  }
`;

export default ImagePreviewButton;
