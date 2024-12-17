import { useState } from 'react';

export const useFolderSelection = () => {
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedFolders, setSelectedFolders] = useState<string[]>([]);

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    if (isSelectionMode) {
      setSelectedFolders([]);
    }
  };

  const handleFolderSelect = (folderId: string) => {
    if (!isSelectionMode) return;
    
    setSelectedFolders(prev => {
      if (prev.includes(folderId)) {
        return prev.filter(id => id !== folderId);
      }
      return [...prev, folderId];
    });
  };

  const clearSelection = () => {
    setSelectedFolders([]);
    setIsSelectionMode(false);
  };

  return {
    isSelectionMode,
    selectedFolders,
    toggleSelectionMode,
    handleFolderSelect,
    clearSelection
  };
};