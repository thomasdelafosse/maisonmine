import React from "react";
import { Button } from "@/components/common/reusable-ui/buttons";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <Button type="submit" isLoading={isSubmitting} variant="primary">
        {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER"}
      </Button>
    </div>
  );
};
