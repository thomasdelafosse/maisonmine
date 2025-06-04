import { Button } from "@/components/common/reusable-ui/buttons";

interface SubmitButtonType {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonType> = ({ isSubmitting }) => {
  return (
    <div className="flex items-center justify-center ">
      <Button type="submit" isLoading={isSubmitting} variant="primary">
        {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER"}
      </Button>
    </div>
  );
};
