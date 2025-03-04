import emailjs from "@emailjs/browser";
import {
  ContactFormData,
  EmailResponse,
  EmailServiceConfig,
} from "../types/contact.types";

export class EmailService {
  private config: EmailServiceConfig;

  constructor(config: EmailServiceConfig) {
    this.config = config;
  }

  async sendEmail(data: ContactFormData): Promise<EmailResponse> {
    try {
      const result = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        {
          to_name: data.to_name,
          from_name: data.from_name,
          phone: data.phone,
          projectType: data.projectType,
          message: data.message,
          reply_to: data.from_name,
        },
        this.config.publicKey
      );

      return {
        success: result.status === 200,
        error:
          result.status !== 200 ? "Échec de l'envoi du message" : undefined,
      };
    } catch (error) {
      console.error("Failed to send email:", error);
      return {
        success: false,
        error: "Échec de l'envoi du message. Veuillez réessayer.",
      };
    }
  }
}

export const createEmailService = (): EmailService => {
  if (
    !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
    !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  ) {
    throw new Error("Missing required email configuration");
  }

  return new EmailService({
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  });
};
