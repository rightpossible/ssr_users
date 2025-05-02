interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar: string;
  company: {
    name: string;
  };
  website: string;
}

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="h-16 w-16 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-900 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{user.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</p>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{user.email}</div>
            {user.company && (
              <div className="text-sm text-gray-600 dark:text-gray-300">{user.company.name}</div>
            )}
            {user.website && (
              <a 
                href={`https://${user.website}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline mt-1 inline-block"
              >
                {user.website}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 