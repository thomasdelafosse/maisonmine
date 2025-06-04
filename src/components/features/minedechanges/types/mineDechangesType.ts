import { SanityDocument } from "next-sanity";
import { TypedObject } from "@portabletext/types";

export type LoadingStates = {
  chaisechably: boolean;
  chaiseZebre: boolean;
  clubArtDeco: boolean;
};

export type MinedechangesCollectionType = {
  className?: string;
  nameClassName?: string;
  showInnerText?: boolean;
};

export type MinedechangesDetailsType = {
  slug: string;
};

export type MinedechangesDocument = SanityDocument & {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  blogSummaryBody?: string;
  body?: TypedObject | TypedObject[];
  position?: number;
};
