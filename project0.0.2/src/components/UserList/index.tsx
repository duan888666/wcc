import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useStore } from '../../stores/useStore';
import { useSearch } from '../../hooks/useSearch';
import { UserCard } from './UserCard';
import { EditUserModal } from './EditUserModal';
import { User } from '../../types';

export const UserList: React.FC = () => {
  const { users, addUser, updateUser, deleteUser } = useStore();
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User>();
  const { searchQuery, setSearchQuery, filteredItems: filteredUsers } = useSearch(users);

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleUserUpdate = (userData: Omit<User, 'id'> & { id?: string }) => {
    if (userData.id) {
      updateUser(userData.id, userData);
    } else {
      addUser(userData);
    }
    setShowEditModal(false);
    setSelectedUser(undefined);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="h-14 border-b bg-white px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowEditModal(true)}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <PlusIcon className="h-4 w-4 mr-1" />
            添加用户
          </button>
        </div>
        
        <div className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索用户..."
            className="px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEditUser}
              onDelete={deleteUser}
            />
          ))}
        </div>
      </div>

      <EditUserModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedUser(undefined);
        }}
        onConfirm={handleUserUpdate}
        user={selectedUser}
      />
    </div>
  );
};