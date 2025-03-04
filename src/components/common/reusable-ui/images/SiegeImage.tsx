import React from "react";
import Image from "next/image";

type SiegeImageProps = {
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  title: string;
  className?: string;
};

const SiegeImage = ({ image, title, className }: SiegeImageProps) => {
  return (
    <Image
      src={image.asset.url}
      alt={image.alt || title}
      width={500}
      height={500}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default SiegeImage;
