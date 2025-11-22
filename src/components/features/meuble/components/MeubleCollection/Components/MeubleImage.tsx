"use client";

import Image from "next/image";
import { useState } from "react";
import { SanityImage } from "@/components/features/meuble/types/meuble-types";

type MeubleImageProps = {
  image: SanityImage;
  title: string;
  className?: string;
};

const MeubleImage = ({ image, title, className }: MeubleImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-400/50 animate-pulse rounded-lg z-10" />
      )}
      <Image
        src={image.asset.url}
        alt={image.alt || title}
        width={500}
        height={500}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
        priority={false}
      />
    </div>
  );
};

export default MeubleImage;
