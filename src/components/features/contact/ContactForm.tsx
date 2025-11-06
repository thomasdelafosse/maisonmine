"use client";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { useContactForm } from "@/components/features/contact/hooks/useContactForm";
import { fields } from "@/components/features/contact/constants/contact-constants";

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
          {fields.map((field) => (
            <div key={field.name} className={field.wrapperClassName ?? ""}>
              <FormField
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                options={field.options}
                error={getFieldError(field.name) as string}
                required
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <SubmitButton isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
};
