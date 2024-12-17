import React, { useState } from 'react';
import { useStore } from '../stores/useStore';
import { UserIcon, PlusIcon } from '@heroicons/react/24/outline';
import { CreateUserModal } from './CreateUserModal';

export const UserList: React.FC = () => {
  const { users } = useStore();
  const [showCreateUser, setShowCreateUser] = useState(false);

  return (
    <div className="flex-1 flex flex-col">
      <div className="h-14 border-b bg-white px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowCreateUser(true)}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <PlusIcon className="h-4 w-4 mr-1" />
            添加用户
          </button>
        </div>
        
        <div className="flex items-center">
          <input
            type="text"
            placeholder="搜索用户..."
            className="px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mb-2" />
              ) : (
                <UserIcon className="w-16 h-16 text-gray-400 mb-2" />
              )}
              <span className="text-sm font-medium text-gray-900">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      <CreateUserModal
        isOpen={showCreateUser}
        onClose={() => setShowCreateUser(false)}
      />
    </div>
  );
};