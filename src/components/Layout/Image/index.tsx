/* eslint-disable no-param-reassign */
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import LoadingPlaceholder from "~components/Layout/LoadingPlaceholder";
import calculateScale from "~utils/calculateScale";
import type { ReactElement } from "~types";
import { useScrollHeight } from "~components/ScrollHeightContext";

export type ImageProps = {
  alt?: string;
  containerStyle?: string;
  contentType: string;
  height: number;
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
  scale = 0,
  styles,
  url,
  width,
}: ImageProps): ReactElement | null => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const { clientHeight, scrollHeight } = useScrollHeight();
  const [isLoading, setLoading] = useState(true);
  const isRescaled = scale !== 0;
  const newHeight = isRescaled ? calculateScale(height, scale) : height;
  const newWidth = isRescaled ? calculateScale(width, scale) : width;
  const rescale = isRescaled ? `fit=scale&h=${newHeight}&w=${newWidth}` : "";

  useEffect(() => {
    if (imageRef.current && clientHeight > 0) {
      const { top: topOfImage } = imageRef.current.getBoundingClientRect();
      /* istanbul ignore next */
      if (clientHeight >= topOfImage || scrollHeight >= topOfImage)
        setLoading(false);
    }
  }, [scrollHeight, clientHeight]);

  return (
    <picture
      ref={imageRef}
      data-testid="picture"
      css={css`
        ${containerStyle}
      `}
    >
      {!isLoading ? (
        <>
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
            css={css`
              ${styles}
            `}
            src={url}
            height={newHeight}
            width={newWidth}
            alt={alt}
          />
        </>
      ) : (
        <LoadingPlaceholder
          data-testid="placeholder"
          height={height}
          width={width}
          isLoading={isLoading}
        />
      )}
    </picture>
  );
};

export default Image;
