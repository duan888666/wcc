import React from 'react';
import { FolderIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Folder } from '../../types';

interface FolderItemProps {
  folder: Folder;
  isSelectionMode: boolean;
  isSelected: boolean;
  onSelect: (folderId: string) => void;
}

export const FolderItem: React.FC<FolderItemProps> = ({
  folder,
  isSelectionMode,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center p-4 rounded-lg ${
        isSelectionMode ? 'cursor-pointer hover:bg-gray-100' : ''
      } group`}
      onClick={() => isSelectionMode && onSelect(folder.id)}
    >
      {isSelectionMode && isSelected && (
        <CheckCircleIcon className="absolute top-2 left-2 w-5 h-5 text-blue-500" />
      )}
      <FolderIcon 
        className={`w-16 h-16 mb-2 ${
          isSelected && isSelectionMode 
            ? 'text-blue-500' 
            : 'text-gray-400 group-hover:text-gray-500'
        }`} 
      />
      <span className="text-sm text-center font-medium text-gray-700 group-hover:text-gray-900">
        {folder.name}
      </span>
      <span className="text-xs text-gray-500">
        {new Date(folder.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};