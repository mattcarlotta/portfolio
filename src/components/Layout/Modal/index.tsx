import { cloneElement, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import BackgroundOverlay from "./BackgroundOverlay";
import ClickHandler from "./ClickHandler";
import Container from "./Container";
import CloseModalButton from "./CloseModalButton";
import ModalContent from "./ModalContent";
import WindowContainer from "./WindowContainer";
import { ModalProps } from "~types";

const Modal = ({
  children,
  isOpen,
  onClick,
}: ModalProps): JSX.Element | null => {
  const [isLoaded, setLoaded] = useState(true);

  const handleImageLoaded = useCallback(() => setLoaded(true), []);

  /* istanbul ignore next */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  useEffect(() => {
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
                  {cloneElement(children, { handleImageLoaded })}
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
