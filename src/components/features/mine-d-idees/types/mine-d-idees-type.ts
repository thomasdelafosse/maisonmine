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

type ImageWithAsset = {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  legend?: string;
};

type ImageWithLegend = {
  image: ImageWithAsset;
  legend?: string;
};

export type MinedideesDocument = SanityDocument & {
  _id: string;
  title: string;
  slug: { current: string };
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  price?: string;
  bodyOnHover?: TypedObject | TypedObject[];
  position?: number;
};

export type MinedideesData = MinedideesDocument & {
  imagesWithLegends?: ImageWithLegend[];
  body?: TypedObject | TypedObject[];
};
