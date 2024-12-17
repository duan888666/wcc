import React from 'react';
import { useStore } from '../../stores/useStore';
import { FolderGrid } from './FolderGrid';
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
  const { filteredItems: filteredFolders } = useSearch(folders, searchQuery);

  return (
    <div className="flex-1 overflow-auto p-4">
      <FolderGrid
        folders={filteredFolders}
        isSelectionMode={isSelectionMode}
        selectedFolders={selectedFolders}
        onFolderSelect={onFolderSelect}
      />
    </div>
  );
};