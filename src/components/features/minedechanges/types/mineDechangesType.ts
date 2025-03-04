import { ReactElement } from "react";
import { SanityDocument } from "next-sanity";
import { PortableTextBlock } from "next-sanity";

export type LoadingStates = {
  chaisechably: boolean;
  chaiseZebre: boolean;
  clubArtDeco: boolean;
};

export type MinedechangesCollectionProps = {
  className?: string;
  nameClassName?: string;
  showInnerText?: boolean;
};

export type MinedechangesDetailsProps = {
  slug: string;
};

export type MinedechangesDocument = SanityDocument & {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  blogSummaryBody?: string;
  body?: PortableTextBlock[];
  position?: number;
};
