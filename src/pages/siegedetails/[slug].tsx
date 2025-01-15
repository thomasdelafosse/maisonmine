import Navbar from "@/components/navbar";
import { useItem } from "@/hooks/use-item";
import SiegeCollection from "@/components/siegecollection";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Footer from "@/components/footer";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  // Don't render anything until we have the slug
  if (!router.isReady || typeof slug !== 'string') return <div>Loading...</div>;

  return <SiegeDetails slug={slug} />;
}

function SiegeDetails({ slug }: { slug: string }) {
  const item = useItem(process.env.NEXT_PUBLIC_SIEGE_COLLECTION_ID || "", slug);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [slug]);

  if (!item) return <div>Loading...</div>;

  const images = [
    item.fieldData["thumbnail-image"],
    item.fieldData["mini-1"],
    item.fieldData["mini-2"],
    item.fieldData["mini-3"],
    item.fieldData["mini-4"],
    item.fieldData["mini-5"],
    item.fieldData["mini-6"],
    item.fieldData["mini-7"],
    item.fieldData["mini-8"],
    item.fieldData["mini-9"],
    item.fieldData["mini-10"],
    item.fieldData["mini-11"],
    item.fieldData["mini-12"],
    item.fieldData["mini-13"],
    item.fieldData["mini-14"],
    item.fieldData["mini-15"],
    item.fieldData["mini-16"],
    item.fieldData["mini-17"],
    item.fieldData["mini-18"],
  ].filter((img) => img?.url);

  return (
    <div>
      <style jsx global>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black !important;
            transform: scale(0.7);
            background-color: white;
            width: 40px !important;
            height: 40px !important;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.8;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px !important;
          }

          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          }
        `}
      </style>
      <Navbar />
      <div className="mt-48 md:mt-64 md:flex  md:mx-44 mx-4">
        <div className="w-full md:w-1/3 ">
          <h1>{item.name}</h1>
          <p className="hidden md:block text-sm text-gray-500 mb-2 text-center italic">
            Double-cliquez pour zoomer & slide pour naviguer
          </p>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination, Mousewheel, Zoom, Navigation]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            mousewheel
            zoom={true}
          >
            {images.map(
              (image, index) =>
                image && (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center items-center relative swiper-zoom-container  h-[450px] md:h-[450px] max-w-[500px] ">
                      <Image
                        src={image.url}
                        alt={image.alt || "Image"}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl "
                      />
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
        <div className="w-full md:w-2/3 ">
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-36 md:mt-8">
            <div className="md:border-l-2 md:border-gray-300 md:pl-2">
              <div
                className="text-xl font-semibold text-center md:text-left"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.fieldData["name"]),
                }}
              />
              <div
                style={{ fontSize: "20px", lineHeight: "24px" }}
                className="text-base mt-4 text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    item.fieldData["blog-content"] || ""
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <SiegeCollection
        collectionId={process.env.NEXT_PUBLIC_SIEGE_COLLECTION_ID || ""}
        className="mt-16 grid grid-cols-3 gap-4 mx-4 md:grid-cols-6 md:mx-28"
        nameClassName="font-light text-sm text-center"
        imageClassName="w-full rounded-lg"
        innerDivClassName="hidden"
        showInnerText={false}
        priceClassName="hidden"
      />
      <Footer />
    </div>
  );
}
