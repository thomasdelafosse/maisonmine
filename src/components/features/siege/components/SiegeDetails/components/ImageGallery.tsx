import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Zoom, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { SanityImage } from "@/components/features/siege/types/siegeType";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageGalleryType {
  images: SanityImage[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryType) {
  const [activeLegend, setActiveLegend] = useState<string | undefined>(
    undefined
  );
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [images]);

  return (
    <div className="w-full md:w-1/3">
      <style jsx global>{`
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

        .swiper-slide-legend {
          text-align: center;
          margin-top: 20px;
          font-style: italic;
          color: gray;
          padding: 0 10px;
          position: relative;
          z-index: 1;
        }

        .swiper-pagination {
          position: relative;
          bottom: 0 !important;
          margin-top: 10px;
          display: none;
        }

        .swiper-pagination-bullet {
          background-color: black;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background-color: black;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }

          .swiper-pagination {
            display: block;
          }
        }
      `}</style>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveLegend(images[0]?.legend);
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveLegend(images[realIndex]?.legend);
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Mousewheel, Zoom, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        mousewheel
        zoom={true}
        className="flex flex-col"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col h-[450px]">
              <div className="flex justify-center items-center relative swiper-zoom-container h-[450px] md:h-[450px] max-w-[500px]">
                <Image
                  src={image.asset.url}
                  alt={image.alt || title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <p className="hidden md:block text-xs text-gray-500 mt-4 mb-2 text-center italic">
          Double-cliquez pour zoomer & slide pour naviguer
        </p>
        <div className="swiper-slide-legend min-h-[10px]">
          {activeLegend || "\u00A0"}
        </div>
      </Swiper>
    </div>
  );
}
