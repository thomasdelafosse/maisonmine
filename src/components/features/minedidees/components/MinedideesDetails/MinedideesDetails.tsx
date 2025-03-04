import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { MineDetailsContentProps } from "../../types/mineDideesType";
import MinedideesCollection from "../MinedideesCollection/MinedideesCollection";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { useMinedideeDetails } from "../../hooks/useMinedideeDetails";
import { VARIANT_STYLES } from "../../constants/minedideesConstants";
import { Button } from "@/components/common/reusable-ui/buttons";

export default function MinedideesDetails({ slug }: MineDetailsContentProps) {
  const { minedidee, loading, error } = useMinedideeDetails(slug);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!minedidee) {
    return <div>No minedidee found</div>;
  }

  return (
    <>
      <div className="md:flex md:mx-44">
        <div className="w-full md:w-1/3">
          {minedidee.image && (
            <div className="flex justify-center items-center relative rounded-lg h-[550px]">
              <Image
                src={minedidee.image.asset.url}
                alt={minedidee.image.alt || minedidee.title}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-36 md:mt-10">
            <div className="md:border-l-2 md:border-gray-300 md:pl-2">
              <div className="text-xl font-medium text-center md:text-left">
                {minedidee.title}
              </div>
              <div
                style={{ fontSize: "20px", lineHeight: "24px" }}
                className="text-base mt-4 text-gray-500 [&>p]:mb-4 last:[&>p]:mb-0"
              >
                <PortableText value={minedidee.body} />
              </div>
              <div className="flex justify-center md:justify-start mt-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    DEMANDER UN DEVIS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <MinedideesCollection
        slug="Minedidees"
        className={VARIANT_STYLES.footer.container}
        nameClassName={VARIANT_STYLES.footer.title}
        imageClassName={VARIANT_STYLES.footer.image}
        innerDivClassName={VARIANT_STYLES.footer.hover}
        showInnerText={false}
        priceClassName={VARIANT_STYLES.footer.price}
      />
    </>
  );
}
