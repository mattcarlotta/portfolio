/* eslint-disable no-param-reassign */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import BrokenImage from "~components/Layout/BrokenImage";
import LoadingPlaceholder from "~components/Layout/LoadingPlaceholder";
import type { ReactElement } from "~types";

export type ImageProps = {
  alt?: string;
  containerStyle?: string;
  contentType: string;
  height: number;
  placeholder?: boolean;
  scale?: number;
  styles?: string;
  width: number;
  url: string;
};

const Image = ({
  alt,
  containerStyle,
  contentType,
  height,
  placeholder,
  scale = 0,
  styles,
  url,
  width,
}: ImageProps): ReactElement | null => {
  const [state, setState] = useState({ error: false, isLoading: true });
  const [isBrowser, setBrowser] = useState(false);
  const { error, isLoading } = state;
  const isRescaled = scale !== 0;
  const newHeight = isRescaled ? Math.round(height * (scale / 100)) : height;
  const newWidth = isRescaled ? Math.round(width * (scale / 100)) : width;
  const rescale = isRescaled ? `fit=scale&h=${newHeight}&w=${newWidth}` : "";

  const onError = () => {
    setState({ error: true, isLoading: false });
  };

  const onLoad = () => {
    setState({ error: false, isLoading: false });
  };

  const handleImageRef = (node: HTMLImageElement | null) => {
    if (node) {
      node.onload = onLoad;
      node.onerror = onError;
    }
  };

  useEffect(() => {
    setBrowser(true);
  }, []);

  return isBrowser ? (
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
              height={height}
              width={width}
              isLoading={isLoading}
            />
          )}
          <source
            srcSet={`${url}?fm=webp${isRescaled ? `&${rescale}` : ""}`}
            type="image/webp"
          />
          <source
            srcSet={`${url}${isRescaled ? `?${rescale}` : ""}`}
            type={contentType}
          />
          <img
            data-testid="image"
            ref={handleImageRef}
            style={{
              display: placeholder && isLoading ? "none" : "flex",
            }}
            css={css`
              ${styles}
            `}
            src={url}
            height={newHeight}
            width={newWidth}
            onLoad={onLoad}
            onError={onError}
            alt={alt}
          />
        </>
      ) : (
        <BrokenImage data-testid="broken-image" />
      )}
    </picture>
  ) : (
    <div style={{ height: newHeight, width: newWidth }} />
  );
};

export default Image;
