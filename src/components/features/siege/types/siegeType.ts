import { PortableTextBlock } from "next-sanity";
import { SanityDocument } from "next-sanity";

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

export type PointOfInterest = {
  position: {
    x: number;
    y: number;
    z: number;
    start?: number;
  };
  text: string;
};

export type SiegeData = SanityDocument & {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImage;
  imagesWithLegends?: ImageWithLegend[];
  price?: string;
  bodyOnHover?: PortableTextBlock[];
  body?: PortableTextBlock[];
  position?: number;
  modelFile?: string | { asset: { url: string } };
  pointsOfInterest?: PointOfInterest[];
};

export type SiegeDisplayVariant = "grid" | "footer";

export type SiegeListProps = {
  items: SiegeData[];
  variant?: SiegeDisplayVariant;
  className?: string;
};
