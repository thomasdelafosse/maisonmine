"use client";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { useContactForm } from "@/components/features/contact/hooks/useContactForm";
import { ProjectType } from "@/components/features/contact/types/contact.types";

const projectTypes: ProjectType[] = [
  "Je souhaite restaurer un siège",
  "J'ai un meuble à patiner",
  "J'ai une idée de projet",
  "J'ai une autre question",
];

export const ContactForm = () => {
  const { form, isSubmitting, errors, handleSubmit } = useContactForm();

  const getFieldError = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  return (
    <div className="flex justify-center mx-4">
      <form ref={form} onSubmit={handleSubmit} className="w-full max-w-4xl">
        <h1 className="text-1xl font-medium mb-4 md:mb-6 text-center">
          UN PROJET DE RESTAURATION ? UNE IDÉE, UNE ENVIE, UNE QUESTION ?
          CONTACTEZ-MOI !
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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

          <div className="md:col-span-2">
            <FormField
              label="DESCRIPTION DU PROJET"
              name="message"
              type="textarea"
              placeholder="entrez la description de votre projet"
              error={getFieldError("message")}
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <SubmitButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
};
