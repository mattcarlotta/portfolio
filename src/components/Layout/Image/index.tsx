import * as React from "react";
import { css } from "@emotion/react";
import BrokenImage from "~components/Layout/BrokenImage";
import { ReactElement } from "~types";

export type ImageProps = {
  alt?: string;
  containerStyle?: string;
  height?: string;
  handleImageLoaded: () => void;
  onClick: () => void;
  src?: string;
  styles?: string;
  width?: string;
};

const Image = ({
  alt,
  containerStyle,
  handleImageLoaded,
  height,
  onClick,
  src,
  styles,
  width,
}: ImageProps): ReactElement => {
  const [error, setError] = React.useState(false);
  const onLoad = () => {
    handleImageLoaded();
  };

  const onError = () => {
    setError(true);
    handleImageLoaded();
  };

  const handleImageRef = (node: HTMLImageElement | null) => {
    if (node) {
      node.onload = onLoad;
      node.onerror = onError;
    }
  };

  return (
    <picture
      data-testid="picture"
      css={css`
        ${containerStyle}
      `}
      onClick={onClick}
    >
      {!error ? (
        <>
          <source srcSet={`/${src}.webp`} type="image/webp" />
          <img
            ref={handleImageRef}
            css={css`
              ${styles}
            `}
            src={`/${src}.png`}
            height={height}
            width={width}
            onLoad={onLoad}
            onError={onError}
            alt={alt}
          />
        </>
      ) : (
        <BrokenImage />
      )}
    </picture>
  );
};

/* istanbul ignore next */
Image.defaultProps = {
  handleImageLoaded: () => null,
  onClick: () => null,
};

export default Image;
