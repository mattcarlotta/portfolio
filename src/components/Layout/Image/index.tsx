import * as React from "react";
import { css } from "@emotion/react";
import BrokenImage from "~components/Layout/BrokenImage";
import LoadingPlaceholder from "~components/Layout/LoadingPlaceholder";
import { ReactElement } from "~types";

export type ImageProps = {
  alt?: string;
  containerStyle?: string;
  height?: string;
  placeholder?: boolean;
  src?: string;
  styles?: string;
  width?: string;
};

const Image = ({
  alt,
  containerStyle,
  height,
  placeholder,
  src,
  styles,
  width,
}: ImageProps): ReactElement => {
  const [state, setState] = React.useState({ error: false, isLoading: true });
  const { error, isLoading } = state;
  const isBrowser = typeof document !== "undefined";

  const onError = () => {
    setState({ error: true, isLoading: false });
  };

  const onLoad = async () => {
    setState({ error: false, isLoading: false });
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
    >
      {!error ? (
        <>
          {placeholder && (
            <LoadingPlaceholder
              data-testid="placeholder"
              isLoading={isBrowser && isLoading}
            />
          )}
          <source srcSet={`/${src}.webp`} type="image/webp" />
          <img
            ref={handleImageRef}
            style={{
              display: placeholder && isBrowser && isLoading ? "none" : "flex",
            }}
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

export default Image;
