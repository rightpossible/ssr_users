export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">User Directory</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Loading users...
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4 animate-pulse border border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 