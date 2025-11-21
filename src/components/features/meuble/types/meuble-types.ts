import { PortableTextBlock } from "next-sanity";

export type SanityImage = {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
};

export type MeubleData = {
  _id: string;
  title: string;
  image: SanityImage;
  price?: string;
  bodyOnHover?: PortableTextBlock[];
  position?: number;
};

export type MeubleCollectionProps = {
  className?: string;
  nameClassName?: string;
  innerDivClassName?: string;
  imageClassName?: string;
  showInnerText?: boolean;
  svgElement?: React.ReactElement;
  priceClassName?: string;
};
