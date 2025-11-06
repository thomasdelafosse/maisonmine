import {
  ContactFormData,
  ValidationError,
} from "@/components/features/contact/types/contact-types";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  return phoneRegex.test(phone);
};

export const validateContactForm = (
  data: ContactFormData
): ValidationError[] => {
  const errors: ValidationError[] = [];

  Object.entries(data).forEach(([key, value]) => {
    if (!value || value.trim() === "") {
      errors.push({
        field: key as keyof ContactFormData,
        message: "Ce champ est requis",
      });
    }
  });

  if (data.from_name && !validateEmail(data.from_name)) {
    errors.push({
      field: "from_name",
      message: "Format d'email invalide",
    });
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.push({
      field: "phone",
      message: "Format de numéro de téléphone invalide",
    });
  }

  return errors;
};
