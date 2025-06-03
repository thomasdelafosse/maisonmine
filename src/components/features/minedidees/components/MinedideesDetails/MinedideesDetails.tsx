import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { MineDetailsContentProps } from "@/components/features/minedidees/types/mineDideesType";
import MinedideesCollection from "@/components/features/minedidees/components/MinedideesCollection/MinedideesCollection";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { useMinedideeDetails } from "@/components/features/minedidees/hooks/useMinedideeDetails";
import { VARIANT_STYLES } from "@/components/features/minedidees/constants/minedideesConstants";
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
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-20 md:mt-10">
            <div className="md:border-l-2 md:border-gray-300 md:pl-6">
              <div className="text-3xl font-base text-gray-800 mb-6 text-center md:text-left tracking-tight">
                {minedidee.title}
              </div>

              {minedidee.body && (
                <div className="text-lg leading-relaxed text-gray-700 mt-4 [&>p]:mb-6 last:[&>p]:mb-0">
                  <PortableText value={minedidee.body} />
                </div>
              )}
            </div>
            <div className="flex justify-center  mt-6">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  DEMANDER UN DEVIS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <MinedideesCollection
        className={VARIANT_STYLES.footer.container}
        nameClassName={VARIANT_STYLES.footer.title}
        imageClassName={VARIANT_STYLES.footer.image}
        innerDivClassName={VARIANT_STYLES.footer.hover}
        showInnerText={false}
      />
    </>
  );
}
