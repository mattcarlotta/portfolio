import styled from "@emotion/styled";
import { useImageContext } from "~components/ImageContext";
import { ReactElement } from "~types";

export const BackgroundImage = styled.div<{
  src: string;
  supportsWebp: boolean;
}>`
  background-image: ${({ supportsWebp, src }) =>
    supportsWebp ? `url(${src}.webp)` : `url(${src}.png)`};
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export type BackImageViewerProps = {
  dataTestId: string;
  src: string;
};

const BackgroundImageViewer = ({
  dataTestId,
  src,
}: BackImageViewerProps): ReactElement => {
  const { supportsWebp } = useImageContext();

  return (
    <BackgroundImage
      data-testid={dataTestId}
      src={src}
      supportsWebp={supportsWebp}
    />
  );
};

export default BackgroundImageViewer;
