import { useCallback, useState } from "react";
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
  const [error, setError] = useState(false);

  const onLoad = useCallback(() => {
    handleImageLoaded();
  }, []);

  const onError = useCallback(() => {
    setError(true);
    handleImageLoaded();
  }, []);

  const handleImageRef = useCallback(node => {
    if (node) {
      node.onload = onLoad;
      node.onerror = onError;
    }
  }, []);

  return (
    <picture data-testid="picture" css={containerStyle} onClick={onClick}>
      {!error ? (
        <>
          <source
            ref={handleImageRef}
            srcSet={`/${src}.webp`}
            type="image/webp"
          />
          <img
            ref={handleImageRef}
            css={styles}
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
