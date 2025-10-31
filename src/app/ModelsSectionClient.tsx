"use client";
import dynamic from "next/dynamic";

const ModelsSection = dynamic(
  () => import("@/components/3d/sections/ModelsSection"),
  {
    ssr: false,
    loading: () => <div className="h-[600px] md:h-[800px]"></div>,
  }
);

export default ModelsSection;
