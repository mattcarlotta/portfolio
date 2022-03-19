/* istanbul ignore file */
import type { Document } from "@contentful/rich-text-types";
export type { GetStaticPaths, GetStaticProps, NextPage } from "next";
export type { AppProps } from "next/app";
export type {
  ComponentType,
  ChangeEvent,
  CSSProperties,
  FC,
  FormEvent,
  MouseEvent,
  ReactNode,
  ReactElement,
  Ref,
} from "react";
export { TransitionProps } from "@material-ui/core/transitions";

export type CONTENTFUL_ID = {
  sys: {
    id: string;
  };
};

export type CONTENTFUL_IMAGE = {
  url: string;
  description: string;
  contentType: string;
  height: number;
  width: number;
  title: string;
};

export type CONTENTFUL_TITLE = {
  title: string;
};

export type CONTENTFUL_BACKGROUND = {
  profileImage: CONTENTFUL_IMAGE;
  location: string;
  rank: string;
  email: string;
  description: {
    json: Document;
  };
  tech: {
    data: Array<{ level: number; technology: string }>;
  };
  education: {
    data: Array<{ url: string; title: string }>;
  };
} & CONTENTFUL_ID &
  CONTENTFUL_TITLE;
