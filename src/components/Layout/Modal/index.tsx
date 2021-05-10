import * as React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "~icons";
import BackgroundOverlay from "./BackgroundOverlay";
import ClickHandler from "./ClickHandler";
import Container from "./Container";
import CloseModalButton from "./CloseModalButton";
import ModalContent from "./ModalContent";
import WindowContainer from "./WindowContainer";
import { ReactElement } from "~types";

export type ModalProps = {
  children: ReactElement;
  isOpen: boolean;
  onClick: () => void;
};

const Modal = ({
  children,
  isOpen,
  onClick,
}: ModalProps): ReactElement | null => {
  const [isLoaded, setLoaded] = React.useState(true);

  const handleImageLoaded = React.useCallback(() => setLoaded(true), []);

  /* istanbul ignore next */
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) setLoaded(false);
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div id="modal">
          <BackgroundOverlay data-testid="background-overlay" />
          <WindowContainer>
            <Container>
              <ClickHandler closeModal={onClick}>
                <ModalContent isLoaded={isLoaded}>
                  <CloseModalButton data-testid="close-modal" onClick={onClick}>
                    <FaTimes />
                  </CloseModalButton>
                  {React.cloneElement(children, { handleImageLoaded })}
                </ModalContent>
              </ClickHandler>
            </Container>
          </WindowContainer>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
