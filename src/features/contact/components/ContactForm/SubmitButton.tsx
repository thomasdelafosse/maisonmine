import React from "react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <button
        className="bg-white text-gray-500 py-1 px-3 rounded border-2 border-gray-400 hover:bg-gray-200 focus:outline-none focus:shadow-outline disabled:opacity-50"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER"}
      </button>
    </div>
  );
};
