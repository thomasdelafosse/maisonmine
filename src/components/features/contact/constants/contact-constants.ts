import {
  FieldConfig,
  PROJECT_TYPES,
} from "@/components/features/contact/types/contact-types";

export const fields: FieldConfig[] = [
  {
    label: "VOS NOMS & PRÉNOMS",
    name: "to_name",
    placeholder: "entrez vos noms & prénoms",
  },
  {
    label: "VOTRE ADRESSE MAIL",
    name: "from_name",
    type: "email",
    placeholder: "entrez votre adresse mail",
  },
  {
    label: "VOS COORDONNÉES TÉLÉPHONIQUES",
    name: "phone",
    type: "tel",
    placeholder: "entrez votre numéro de téléphone",
  },
  {
    label: "VOTRE MESSAGE PARLANT DE VOTRE PROJET",
    name: "projectType",
    type: "select",
    placeholder: "Sélectionnez le type de projet",
    options: [...PROJECT_TYPES],
  },
  {
    label: "DESCRIPTION DU PROJET",
    name: "message",
    type: "textarea",
    placeholder: "entrez la description de votre projet",
    wrapperClassName: "md:col-span-2",
  },
];
