import { ReactElement } from "react";
import { SanityDocument } from "next-sanity";

export type MinedechangesCollectionProps = {
  className?: string;
  nameClassName?: string;
  innerDivClassName?: string;
  showInnerText?: boolean;
  svgElement?: ReactElement;
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
  body?: any[];
  position?: number;
};
