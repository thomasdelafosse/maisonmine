import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import MeubleImage from "./Components/MeubleImage";
import { Button } from "@/components/common/reusable-ui/buttons";

type MeubleItemProps = {
  meuble: SanityDocument;
  isVisible: boolean;
  onToggleVisibility: () => void;
  nameClassName?: string;
  innerDivClassName?: string;
  imageClassName?: string;
  showInnerText?: boolean;
  svgElement?: React.ReactElement;
  priceClassName?: string;
};

export function MeubleItem({
  meuble,
  isVisible,
  onToggleVisibility,
  nameClassName = "",
  innerDivClassName = "",
  imageClassName = "",
  showInnerText = true,
  svgElement,
  priceClassName = "",
}: MeubleItemProps) {
  return (
    <div className="collection-item relative">
      {svgElement && (
        <Button
          variant="ghost"
          onClick={onToggleVisibility}
          leftIcon={svgElement}
          className="absolute top-2 right-2 z-50 block md:hidden p-2"
          aria-label="Toggle information"
        />
      )}
      <div className="relative group aspect-[3/4]">
        <MeubleImage
          image={meuble.image}
          title={meuble.title}
          className={imageClassName}
        />
        <div
          className={`${innerDivClassName} ${
            isVisible ? "opacity-100 md:opacity-0" : "opacity-0"
          } md:group-hover:opacity-100 transition-opacity`}
        >
          {showInnerText && meuble.bodyOnHover && (
            <div className="mx-4 [&>p]:mb-4 last:[&>p]:mb-0">
              <PortableText value={meuble.bodyOnHover} />
            </div>
          )}
        </div>
      </div>
      <p className={nameClassName}>{meuble.title}</p>
      <p className={priceClassName}>
        {!meuble.price || Number(meuble.price) === 0 || meuble.price === "0" ? (
          <i>NON DISPONIBLE</i>
        ) : (
          `${meuble.price}€`
        )}
      </p>
    </div>
  );
}
