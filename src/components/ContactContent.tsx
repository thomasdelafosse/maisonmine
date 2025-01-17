import React, { useRef, useState } from "react";
import { fetchEmail } from "@/lib/fetch-email";

export default function ContactContent() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);
      const emailData = {
        to_name: formData.get("to_name")?.toString() || "",
        from_name: formData.get("from_name")?.toString() || "",
        phone: formData.get("phone")?.toString() || "",
        projectType: formData.get("projectType")?.toString() || "",
        message: formData.get("message")?.toString() || "",
      };

      if (
        !emailData.to_name ||
        !emailData.from_name ||
        !emailData.phone ||
        !emailData.projectType ||
        !emailData.message
      ) {
        throw new Error("Veuillez remplir tous les champs");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailData.from_name)) {
        throw new Error("Format d'email invalide");
      }

      const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
      if (!phoneRegex.test(emailData.phone)) {
        throw new Error("Format de numéro de téléphone invalide");
      }

      await fetchEmail(JSON.stringify(emailData));
      alert("Message envoyé avec succès!");
      form.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Échec de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center mx-4">
      <form ref={form} onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold mb-4">
          UN PROJET DE RESTAURATION ? UNE IDÉE, UNE ENVIE, UNE QUESTION ?
          CONTACTEZ-MOI !
        </h1>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            VOS NOMS & PRÉNOMS
          </label>
          <input
            name="to_name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="entrez vos noms & prénoms"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            VOTRE ADRESSE MAIL
          </label>
          <input
            name="from_name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="entrez votre adresse mail"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            VOS COORDONNÉES TÉLÉPHONIQUES
          </label>
          <input
            name="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            placeholder="entrez votre numéro de téléphone"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            VOTRE MESSAGE PARLANT DE VOTRE PROJET
          </label>
          <select
            name="projectType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Sélectionnez le type de projet</option>
            <option>Je souhaite restaurer un siège</option>
            <option>J'ai un meuble à patiner</option>
            <option>J'ai une idée de projet</option>
            <option>J'ai une autre question</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="entrez la description de votre projet"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <button
            className="bg-white text-gray-500 text-lg py-1 px-3 rounded border-2 border-gray-400 hover:bg-gray-200 focus:outline-none focus:shadow-outline disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER"}
          </button>
        </div>
      </form>
    </div>
  );
}
