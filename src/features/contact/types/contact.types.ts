export type ContactFormData = {
  to_name: string;
  from_name: string;
  phone: string;
  projectType: string;
  message: string;
};

export type ValidationError = {
  field: keyof ContactFormData;
  message: string;
};

export type ProjectType =
  | "Je souhaite restaurer un siège"
  | "J'ai un meuble à patiner"
  | "J'ai une idée de projet"
  | "J'ai une autre question";

export type EmailServiceConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

export type EmailResponse = {
  success: boolean;
  error?: string;
};
