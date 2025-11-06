import { Button } from "@/components/common/reusable-ui/buttons";

export const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <div className="flex items-center justify-center ">
      <Button type="submit" isLoading={isSubmitting} variant="primary">
        {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER"}
      </Button>
    </div>
  );
};
