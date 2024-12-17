import React, { useState } from 'react';
import { UserIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { User } from '../../types';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (
    <div className="relative group flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
        <button
          onClick={() => onEdit(user)}
          className="p-1 text-gray-400 hover:text-blue-500 rounded-full hover:bg-blue-50"
        >
          <PencilIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => setShowConfirmDelete(true)}
          className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>

      {user.avatar ? (
        <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mb-2 object-cover" />
      ) : (
        <UserIcon className="w-16 h-16 text-gray-400 mb-2" />
      )}
      <span className="text-sm font-medium text-gray-900">{user.name}</span>

      {showConfirmDelete && (
        <div className="absolute inset-0 bg-white rounded-lg border flex flex-col items-center justify-center p-4">
          <p className="text-sm text-gray-600 mb-4 text-center">确定要删除用户 {user.name} 吗？</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowConfirmDelete(false)}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              取消
            </button>
            <button
              onClick={() => {
                onDelete(user.id);
                setShowConfirmDelete(false);
              }}
              className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              删除
            </button>
          </div>
        </div>
      )}
    </div>
  );
};