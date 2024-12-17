import React from 'react';
import { FolderIcon } from '@heroicons/react/24/outline';
import { useStore } from '../stores/useStore';

export const FileExplorer: React.FC = () => {
  const { folders } = useStore();

  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="grid grid-cols-6 gap-4">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 cursor-pointer group"
          >
            <FolderIcon className="w-16 h-16 text-blue-500 mb-2 group-hover:text-blue-600" />
            <span className="text-sm text-center font-medium text-gray-700 group-hover:text-gray-900">
              {folder.name}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(folder.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};