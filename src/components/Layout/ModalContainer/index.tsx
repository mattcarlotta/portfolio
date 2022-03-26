import { useState } from "react";
import type { ReactElement } from "~types";

export type ModalContainerProps = {
  children: (
    isOpen: boolean,
    selected: string | undefined,
    toggleModal: (selected?: string) => void,
  ) => ReactElement;
};

export type ModalContainerState = {
  isOpen: boolean;
  selected?: string;
};

const ModalContainer = ({ children }: ModalContainerProps): ReactElement => {
  const [state, setState] = useState<ModalContainerState>({
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
