import React from "react";
import Image from "next/image";
import { SanityImage } from "../../../types/meubleType";

type MeubleImageProps = {
  image: SanityImage;
  title: string;
  className?: string;
};

const MeubleImage = ({ image, title, className }: MeubleImageProps) => {
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

export default MeubleImage;
