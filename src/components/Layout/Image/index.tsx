/* eslint-disable no-param-reassign */
import * as React from "react";
import { css } from "@emotion/react";
import BrokenImage from "~components/Layout/BrokenImage";
import LoadingPlaceholder from "~components/Layout/LoadingPlaceholder";
import type { ReactElement } from "~types";

export type ImageProps = {
  alt?: string;
  containerStyle?: string;
  height?: string;
  placeholder?: boolean;
  ratio?: string;
  src?: string;
  styles?: string;
  width?: string;
};

const Image = ({
  alt,
  containerStyle,
  height,
  placeholder,
  ratio,
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
          <source
            srcSet={`${process.env.NEXT_PUBLIC_IMAGE}/${src}.png?&ext=webp&ratio=${ratio}`}
            type="image/webp"
          />
          <img
            data-testid="image"
            ref={handleImageRef}
            style={{
              display: placeholder && isBrowser && isLoading ? "none" : "flex",
            }}
            css={css`
              ${styles}
            `}
            src={`${process.env.NEXT_PUBLIC_IMAGE}/${src}.png?ratio=${ratio}`}
            height={height}
            width={width}
            onLoad={onLoad}
            onError={onError}
            alt={alt}
          />
        </>
      ) : (
        <BrokenImage data-testid="broken-image" />
      )}
    </picture>
  );
};

Image.defaultProps = {
  ratio: "0",
};

export default Image;
