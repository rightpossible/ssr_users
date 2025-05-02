import UserCard from "./components/UserCard";

// This ensures we're using server-side rendering
export const dynamic = 'force-dynamic';

async function getUsers() {
  try {
    // Fetch users from the JSONPlaceholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    const users = await res.json();
    
    // Add avatar images using DiceBear API
    return users.map((user: any) => ({
      ...user,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export default async function Home() {
  const users = await getUsers();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">User Directory</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Users fetched with server-side rendering
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map((user: any) => (
            <div key={user.id} className="transform transition-all duration-300">
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
              <svg className="h-8 w-8 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No users found</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">We couldn't load any users. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
