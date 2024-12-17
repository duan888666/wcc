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

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit(user);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirmDelete(true);
  };

  return (
    <div className="relative group flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
      <div className="absolute top-2 right-2 flex space-x-1 z-10 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
        <button
          onClick={handleEdit}
          className="p-1.5 text-gray-400 hover:text-blue-500 rounded-full hover:bg-blue-50 transition-colors"
          title="编辑用户"
        >
          <PencilIcon className="w-4 h-4" />
        </button>
        <button
          onClick={handleDeleteClick}
          className="p-1.5 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
          title="删除用户"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="w-16 h-16 mb-2">
        {user.avatar ? (
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
            <UserIcon className="w-8 h-8 text-gray-400" />
          </div>
        )}
      </div>

      <span className="text-sm font-medium text-gray-900">{user.name}</span>

      {showConfirmDelete && (
        <div className="absolute inset-0 bg-white rounded-lg border flex flex-col items-center justify-center p-4 z-20">
          <p className="text-sm text-gray-600 mb-4 text-center">
            确定要删除用户 {user.name} 吗？
          </p>
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowConfirmDelete(false);
              }}
              className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              取消
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
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