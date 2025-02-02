import { client } from "@/sanity/client";
import SiegeCollection from "@/components/siegecollection";
import DOMPurify from "dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { PortableText, type SanityDocument, PortableTextBlock } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(client)

type ImageWithLegend = {
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  legend?: string;
};

type SanityImage = {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  legend?: string;
};

type SiegeData = {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImage;
  imagesWithLegends?: ImageWithLegend[];
  price?: string;
  bodyOnHover?: PortableTextBlock[];
  body: PortableTextBlock[];
  position?: number;
}

type SiegeDetailsContentProps = {
  slug: string;
};

export default function SiegeDetailsContent({
  slug,
}: SiegeDetailsContentProps) {
  const [siege, setSiege] = useState<SiegeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeLegend, setActiveLegend] = useState<string | undefined>(undefined);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchSiege = async () => {
      const query = `*[_type == "coteSiege" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        image {
          asset->{
            _id,
            url
          },
          alt,
          legend
        },
        imagesWithLegends[]{
          image {
            asset->{
              _id,
              url
            },
            alt
          },
          legend
        },
        price,
        bodyOnHover,
        body,
        position
      }`;

      const result = await client.fetch<SiegeData>(query, { slug });
      setSiege(result);
      setLoading(false);
    };

    if (slug) {
      fetchSiege();
    }
  }, [slug]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [slug]);

  if (!slug) {
    return null;
  }

  if (loading || !siege) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const allImages = siege.imagesWithLegends 
    ? [
        { ...siege.image, legend: siege.image.legend }, 
        ...siege.imagesWithLegends.map((img: ImageWithLegend) => ({
          asset: img.image.asset,
          alt: img.image.alt,
          legend: img.legend
        }))
      ] 
    : [{ ...siege.image, legend: siege.image.legend }];
  const filteredImages = allImages.filter((img) => img?.asset?.url);

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

          .swiper-slide-legend {
            text-align: center;
            margin-top: 40px;
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
          }

          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none !important;
            }
          }
        `}
      </style>
      <div className="md:flex md:mx-44 mx-4">
        <div className="w-full md:w-1/3">
          <p className="hidden md:block text-sm text-gray-500 mb-2 text-center italic">
            Double-cliquez pour zoomer & slide pour naviguer
          </p>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveLegend(filteredImages[0]?.legend);
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveLegend(filteredImages[realIndex]?.legend);
            }}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination, Mousewheel, Zoom, Navigation]}
            navigation={true}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination'
            }}
            loop={true}
            mousewheel
            zoom={true}
            className="flex flex-col"
          >
            {filteredImages.map(
              (image: SanityImage, index: number) =>
                image && (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col h-[500px]">
                      <div className="flex justify-center items-center relative swiper-zoom-container h-[450px] md:h-[450px] max-w-[500px]">
                        <Image
                          src={image.asset.url}
                          alt={image.alt || siege.title}
                          fill
                          style={{ objectFit: "contain" }}
                          className="rounded-2xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
            )}
            <div className="swiper-pagination" />
            <div className="swiper-slide-legend min-h-[10px]">
              {activeLegend || '\u00A0'}
            </div>
          </Swiper>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col mt-4 mx-4 md:ml-10 md:mr-36 md:mt-8">
            <div className="md:border-l-2 md:border-gray-300 md:pl-2">
              <div
                className="text-xl font-medium text-center md:text-left"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(siege.title),
                }}
              />
              <div
                style={{ fontSize: "20px", lineHeight: "24px" }}
                className="text-base mt-4 text-gray-500 font-light [&>p]:mb-4 last:[&>p]:mb-0">
                <PortableText value={siege.body} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 border-t-2 border-gray-300 mx-20 md:my-20 md:mx-36" />
      <SiegeCollection
        slug="Cotesiege"
        className="mt-16 grid grid-cols-3 gap-4 mx-4 md:grid-cols-6 md:mx-28"
        nameClassName="font-light text-sm text-center"
        imageClassName="w-full rounded-lg"
        innerDivClassName="hidden"
        showInnerText={false}
        priceClassName="hidden"
      />
    </div>
  );
}
