/* istanbul ignore file */
import * as React from "react";
import { ReactElement, ReactNode } from "~types";

export const ImageContext = React.createContext({ supportsWebp: false });

export const useImageContext = (): { supportsWebp: boolean } => {
  const context = React.useContext(ImageContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`,
    );
  }
  return context;
};

const ImageProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [webpSupport, setSupport] = React.useState(false);
  const supportsWebp = React.useMemo(
    () => ({ supportsWebp: webpSupport }),
    [webpSupport],
  );

  React.useEffect(() => {
    const testWebP = () => {
      const img = new Image();
      img.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      img.onload = () => {
        setSupport(img.height === 2);
      };
      img.onerror = () => {
        setSupport(false);
      };
    };

    testWebP();
  });

  return (
    <ImageContext.Provider value={supportsWebp}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
