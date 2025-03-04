import React from "react";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { useContactForm } from "@/features/contact/hooks/useContactForm";
import { ProjectType } from "@/features/contact/types/contact.types";

const projectTypes: ProjectType[] = [
  "Je souhaite restaurer un siège",
  "J'ai un meuble à patiner",
  "J'ai une idée de projet",
  "J'ai une autre question",
];

export const ContactForm: React.FC = () => {
  const { form, isSubmitting, errors, handleSubmit } = useContactForm();

  const getFieldError = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  return (
    <div className="flex justify-center mx-4">
      <form ref={form} onSubmit={handleSubmit}>
        <h1 className="text-2xl font-medium mb-4">
          UN PROJET DE RESTAURATION ? UNE IDÉE, UNE ENVIE, UNE QUESTION ?
          CONTACTEZ-MOI !
        </h1>

        <FormField
          label="VOS NOMS & PRÉNOMS"
          name="to_name"
          placeholder="entrez vos noms & prénoms"
          error={getFieldError("to_name")}
        />

        <FormField
          label="VOTRE ADRESSE MAIL"
          name="from_name"
          type="email"
          placeholder="entrez votre adresse mail"
          error={getFieldError("from_name")}
        />

        <FormField
          label="VOS COORDONNÉES TÉLÉPHONIQUES"
          name="phone"
          type="tel"
          placeholder="entrez votre numéro de téléphone"
          error={getFieldError("phone")}
        />

        <FormField
          label="VOTRE MESSAGE PARLANT DE VOTRE PROJET"
          name="projectType"
          type="select"
          placeholder="Sélectionnez le type de projet"
          options={projectTypes}
          error={getFieldError("projectType")}
        />

        <FormField
          label="DESCRIPTION DU PROJET"
          name="message"
          type="textarea"
          placeholder="entrez la description de votre projet"
          error={getFieldError("message")}
        />

        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};
