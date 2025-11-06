export type ContactFormData = {
  to_name: string;
  from_name: string;
  phone: string;
  projectType: string;
  message: string;
};

export type FieldConfig = {
  label: string;
  name: keyof ContactFormData;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  placeholder: string;
  options?: string[];
  wrapperClassName?: string;
};

export type ValidationError = {
  field: keyof ContactFormData;
  message: string;
};

export const PROJECT_TYPES = [
  "Je souhaite restaurer un siège",
  "J'ai un meuble à patiner",
  "J'ai une idée de projet",
  "J'ai une autre question",
] as const;

export type ProjectType = typeof PROJECT_TYPES;

export type EmailServiceConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

export type EmailResponse = {
  success: boolean;
  error?: string;
};
