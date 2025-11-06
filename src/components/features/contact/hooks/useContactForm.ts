import { FormEvent, useRef, useState } from "react";
import {
  ContactFormData,
  ValidationError,
} from "@/components/features/contact/types/contact-types";
import { validateContactForm } from "@/components/features/contact/utils/validation";
import { createEmailService } from "@/components/features/contact/services/emailService";

type UseContactFormReturn = {
  form: React.RefObject<HTMLFormElement | null>;
  isSubmitting: boolean;
  errors: ValidationError[];
  handleSubmit: (e: FormEvent) => Promise<void>;
};

export const useContactForm = (): UseContactFormReturn => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setErrors([]);

    try {
      const formData = new FormData(form.current);
      const data: ContactFormData = {
        to_name: formData.get("to_name")?.toString() || "",
        from_name: formData.get("from_name")?.toString() || "",
        phone: formData.get("phone")?.toString() || "",
        projectType: formData.get("projectType")?.toString() || "",
        message: formData.get("message")?.toString() || "",
      };

      const validationErrors = validateContactForm(data);
      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        throw new Error("Validation failed");
      }

      const emailService = createEmailService();
      const result = await emailService.sendEmail(data);

      if (result.success) {
        form.current.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      if (error instanceof Error) {
      } else {
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    errors,
    handleSubmit,
  };
};
