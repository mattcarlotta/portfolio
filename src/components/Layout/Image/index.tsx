import * as React from "react";
import { css } from "@emotion/react";
import BrokenImage from "~components/Layout/BrokenImage";
import { ImageProps } from "~types";

const Image = ({
  alt,
  containerStyle,
  handleImageLoaded,
  onClick,
  src,
  styles,
}: ImageProps): JSX.Element => {
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
  handleImageLoaded: () => {},
  onClick: () => {},
};

export default Image;
