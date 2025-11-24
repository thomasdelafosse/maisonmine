import { ContactForm } from "@/components/features/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Maison Mine",
  description:
    "Contactez-nous pour vos projets de rénovation de sièges. Demandez un devis ou des informations complémentaires.",
};

export default async function Contact() {
  return <ContactForm />;
}
