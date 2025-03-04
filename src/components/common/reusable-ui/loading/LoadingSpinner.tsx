interface LoadingSpinnerProps {
  className?: string;
  containerClassName?: string;
}

export default function LoadingSpinner({
  className = "h-12 w-12",
  containerClassName = "flex justify-center items-center min-h-[50vh]",
}: LoadingSpinnerProps) {
  return (
    <div className={containerClassName}>
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-gray-900 ${className}`}
      />
    </div>
  );
}
