import DOMPurify from "dompurify";
import { PortableText } from "next-sanity";
import { SiegeData } from "@/components/features/siege/types/siegeType";

export default function SiegeInfo({ siege }: { siege: SiegeData }) {
  return (
    <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-20 ">
      <div className="md:border-l-2 md:border-gray-300 md:pl-6">
        <div
          className="text-4xl font-base text-gray-800 mb-6 text-center md:text-left tracking-tight"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(siege.title),
          }}
        />
        {siege.body && (
          <div className="text-lg leading-relaxed text-gray-700 mt-4 [&>p]:mb-6 last:[&>p]:mb-0">
            <PortableText value={siege.body} />
          </div>
        )}
      </div>
    </div>
  );
}
