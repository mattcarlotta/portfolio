import { useCallback, useState } from "react";
import { ModalContainerProps } from "~types";

const ModalContainer = ({ children }: ModalContainerProps): JSX.Element => {
  const [state, setState] = useState({
    isOpen: false,
    selected: "",
  });

  const toggleModal = useCallback(
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
