import * as React from "react";
import { ModalContainerProps } from "~types";

const ModalContainer = ({ children }: ModalContainerProps) => {
  const [state, setState] = React.useState({
    isOpen: false,
    selected: "",
  });

  const toggleModal = React.useCallback(
    selected =>
      setState(prevState => ({
        isOpen: !prevState.isOpen,
        selected: !prevState.isOpen ? selected : "",
      })),
    [],
  );

  return <>{children(state.isOpen, state.selected, toggleModal)}</>;
};

export default ModalContainer;
