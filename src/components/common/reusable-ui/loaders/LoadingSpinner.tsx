type LoadingSpinnerType = {
  className?: string;
};

const LoadingSpinner = ({ className }: LoadingSpinnerType) => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div
        className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 ${
          className || ""
        }`}
      />
    </div>
  );
};

export default LoadingSpinner;
