import * as React from "react";
import { css } from "@emotion/react";
import BrokenImage from "~components/Layout/BrokenImage";
import { ReactElement } from "~types";

export type ImageProps = {
  alt?: string;
  containerStyle?: string;
  height?: string;
  src?: string;
  styles?: string;
  width?: string;
};

const Image = ({
  alt,
  containerStyle,
  height,
  src,
  styles,
  width,
}: ImageProps): ReactElement => {
  const [error, setError] = React.useState(false);

  const onError = () => {
    setError(true);
  };

  const handleImageRef = (node: HTMLImageElement | null) => {
    if (node) node.onerror = onError;
  };

  return (
    <picture
      data-testid="picture"
      css={css`
        ${containerStyle}
      `}
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

export default Image;
