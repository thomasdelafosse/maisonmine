export default function UneMineEchangeLoading() {
  return (
    <div className="mx-4 md:mx-72">
      <ul className="flex flex-col gap-10">
        {[1, 2, 3].map((i) => (
          <li key={i} className="animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <div className="flex justify-between md:block">
                  <div className="h-5 w-40 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="w-full md:w-3/4 md:border-l md:border-gray-300 md:pl-4">
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-11/12 bg-gray-200 rounded" />
                  <div className="h-4 w-10/12 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
