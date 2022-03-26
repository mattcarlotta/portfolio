/* istanbul ignore file */
import styled from "@emotion/styled";

const ImagePreviewButton = styled.button<{
  active: boolean;
  height: number;
  src: string;
  supportsWebp: boolean;
  width: number;
}>`
  background-image: ${({ src, height, width, supportsWebp }) =>
    supportsWebp
      ? `url(${src}?fm=webp&h=${height}&w=${width})`
      : `url(${src}&h=${height}&w=${width})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  cursor: pointer;
  margin: 0 5px 10px 5px;
  padding: 0px;
  height: 75px;
  min-width: 75px;
  overflow: hidden;
  border-radius: 4px;
  border: 3px solid ${({ active }) => (active ? "#0080ff" : "#ccc")};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  transition: all 300ms ease-in-out;

  :hover {
    opacity: 1;
  }
`;

export default ImagePreviewButton;
