import * as React from "react";
import { ModalContainerProps } from "~types";

export type ModalContainerState = {
  isOpen: boolean;
  selected?: string;
};

const ModalContainer = ({ children }: ModalContainerProps): JSX.Element => {
  const [state, setState] = React.useState<ModalContainerState>({
    isOpen: false,
    selected: "",
  });

  const toggleModal = (selected?: string): void => {
    setState(prevState => ({
      isOpen: !prevState.isOpen,
      selected: !prevState.isOpen ? selected : "",
    }));
  };

  return <>{children(state.isOpen, state.selected, toggleModal)}</>;
};

export default ModalContainer;
