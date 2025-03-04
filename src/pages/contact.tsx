import dynamic from "next/dynamic";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const ContactContent = dynamic(
  () => import("@/features/contact/ContactContent"),
  {
    loading: () => <LoadingSpinner />,
  }
);

export default function Contact() {
  return <ContactContent />;
}
