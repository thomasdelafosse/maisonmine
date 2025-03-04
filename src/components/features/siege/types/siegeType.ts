import { PortableTextBlock } from "next-sanity";

export type SanityImage = {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  legend?: string;
};

export type ImageWithLegend = {
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  legend?: string;
};

export type SiegeData = {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImage;
  imagesWithLegends?: ImageWithLegend[];
  price?: string;
  bodyOnHover?: PortableTextBlock[];
  body?: PortableTextBlock[];
  position?: number;
};

export type SiegeDisplayVariant = "grid" | "footer";

export type SiegeCollectionProps = {
  variant?: SiegeDisplayVariant;
  className?: string;
  onToggleVisibility?: (id: string) => void;
};
