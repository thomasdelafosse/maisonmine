"use client";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";

const ContactContent = dynamic(
  () => import("@/components/features/contact/ContactContent"),
  {
    loading: () => <LoadingSpinner />,
  }
);

export default function Contact() {
  return <ContactContent />;
}
