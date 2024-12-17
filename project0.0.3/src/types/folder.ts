export interface Folder {
  id: string;
  name: string;
  createdAt: Date;
}

export interface FolderSelectionState {
  isSelectionMode: boolean;
  selectedFolders: string[];
}