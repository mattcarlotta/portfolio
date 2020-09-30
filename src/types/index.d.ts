/* istanbul ignore file */
import { NextPage } from "next";
import { AppProps } from "next/app";
import {
  ComponentType,
  ChangeEvent,
  CSSProperties,
  FC,
  FormEvent,
  MouseEvent,
  ReactNode,
  ReactElement,
} from "react";

/// COMPONENTS ///

export type BaseFieldProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  required: boolean;
  errors?: string;
  onChange?: (event: ChangeEvent<any>) => void;
  style?: CSSProperties;
};

export interface CardProps {
  _id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  backgroundInfo?: string;
  address: any;
  key: any;
  className?: string;
  idx: number;
  handleEditClick: (id: string) => void;
  deleteUser: (id: string) => ReturnType<typeof actions.deleteUser>;
}

export type ClickHandlerProps = {
  closeModal: (selected?: string) => void;
  children: ReactNode;
};

type ComponentProps = {
  className?: string;
  children?: any;
  errors?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: ChangeEvent<any>) => void;
  type?: string;
  value?: string;
  style?: CSSProperties;
};

export type ContainerProps = {
  children: ReactNode;
  dataTestId?: string;
  innerStyle?: CSSProperties;
  style?: CSSProperties;
};

export type FileDetailsProps = {
  active: bool;
  fileName: PropTypes.string;
  location?: string;
  status: string;
  source: string;
};

export type HeaderProps = {
  description: string;
  title: string;
  type: string;
  url: string;
};

export type ImageProps = {
  alt: string;
  containerStyle?: string;
  handleImageLoaded: () => void;
  onClick: () => void;
  src: string;
  styles?: string;
};

export type LinkProps = {
  ariaLabel: string;
  asHref?: string;
  dataTestId: string;
  children: ReactNode;
  className?: string;
  href: string;
  padding?: string;
  style?: CSSProperties;
};

export type ModalProps = {
  children: ReactElement;
  isOpen: boolean;
  onClick: () => void;
};

export type ModalContainerProps = {
  children: (
    isOpen: boolean,
    selected: string,
    toggleModal: (selected?: string) => void,
  ) => JSX.Element;
};

export type PageProps = {
  description: ReactNode | string;
  head: {
    title: string;
    url: string;
    description: string;
  };
  filedetails: {
    active: boolean;
    location?: string;
    status: string;
    source: string;
  };
  snapshots: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
  snapshotdirectory?: string;
  tech: string[];
};

export type OutsideLinkProps = {
  ariaLabel: string;
  className?: string;
  children: string | ReactNode;
  dataTestId?: string;
  href: string;
  style?: CSSProperties;
};

export {
  AppProps,
  ChangeEvent,
  ComponentType,
  CSSProperties,
  FC,
  FormEvent,
  NextPage,
  MouseEvent,
  ReactNode,
};
