"use client";

import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/common/reusable-ui/buttons";
import { MinedideesData } from "@/components/features/mine-d-idees/types/mine-d-idees-type";

export default function IdeeInfo({ minedidee }: { minedidee: MinedideesData }) {
  return (
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
  );
}
