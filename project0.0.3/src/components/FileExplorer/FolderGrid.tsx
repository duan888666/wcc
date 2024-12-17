import React from 'react';
import { FolderItem } from './FolderItem';
import { Folder } from '../../types';

interface FolderGridProps {
  folders: Folder[];
  isSelectionMode: boolean;
  selectedFolders: string[];
  onFolderSelect: (folderId: string) => void;
}

export const FolderGrid: React.FC<FolderGridProps> = ({
  folders,
  isSelectionMode,
  selectedFolders,
  onFolderSelect,
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {folders.map((folder) => (
        <FolderItem
          key={folder.id}
          folder={folder}
          isSelectionMode={isSelectionMode}
          isSelected={selectedFolders.includes(folder.id)}
          onSelect={onFolderSelect}
        />
      ))}
    </div>
  );
};