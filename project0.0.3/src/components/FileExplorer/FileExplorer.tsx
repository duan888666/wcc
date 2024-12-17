import React from 'react';
import { useStore } from '../../stores/useStore';
import { FolderItem } from './FolderItem';
import { useSearch } from '../../hooks/useSearch';

interface FileExplorerProps {
  isSelectionMode: boolean;
  selectedFolders: string[];
  onFolderSelect: (folderId: string) => void;
  searchQuery: string;
}

export const FileExplorer: React.FC<FileExplorerProps> = ({
  isSelectionMode,
  selectedFolders,
  onFolderSelect,
  searchQuery,
}) => {
  const { folders } = useStore();
  const { filteredItems: filteredFolders } = useSearch(folders);

  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="grid grid-cols-6 gap-4">
        {filteredFolders.map((folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            isSelectionMode={isSelectionMode}
            isSelected={selectedFolders.includes(folder.id)}
            onSelect={onFolderSelect}
          />
        ))}
      </div>
    </div>
  );
};