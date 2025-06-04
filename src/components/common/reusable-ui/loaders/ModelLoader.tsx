type ModelLoaderType = {
  loading?: boolean;
};

const ModelLoader = ({ loading = true }: ModelLoaderType) => {
  if (!loading) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-600"></div>
    </div>
  );
};

export default ModelLoader;
