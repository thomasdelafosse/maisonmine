import { ReactElement } from "react";
import { SanityDocument } from "next-sanity";
import { TypedObject } from "@portabletext/types";

export type MinedideesCollectionProps = {
  className?: string;
  nameClassName?: string;
  innerDivClassName?: string;
  imageClassName?: string;
  showInnerText?: boolean;
  svgElement?: ReactElement;
};

export type MineDetailsProps = {
  slug: string;
};

export type SanityImage = {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  legend?: string;
};

export type MinedideesDocument = SanityDocument & {
  _id: string;
  title: string;
  slug: { current: string };
  image?: SanityImage;
  price?: string;
  bodyOnHover?: TypedObject | TypedObject[];
  position?: number;
};

export type MinedideesData = MinedideesDocument & {
  imagesWithLegends?: {
    image: SanityImage;
    legend?: string;
  }[];
  body?: TypedObject | TypedObject[];
};
