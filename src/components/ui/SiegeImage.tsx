import Image from "next/image";

type SiegeImageType = {
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  title: string;
  className?: string;
};

export function SiegeImage({ image, title, className }: SiegeImageType) {
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
}
