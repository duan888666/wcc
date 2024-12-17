import React from 'react';
import { useStore } from '../stores/useStore';
import { FolderIcon } from '@heroicons/react/24/outline';

export const FolderGrid: React.FC = () => {
  const { folders } = useStore();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
        >
          <FolderIcon className="w-16 h-16 text-blue-500 mb-2" />
          <span className="text-sm font-medium text-gray-900">{folder.name}</span>
          <span className="text-xs text-gray-500">
            {new Date(folder.createdAt).toLocaleDateString()}
          </span>
        </div>
      ))}
    </div>
  );
};