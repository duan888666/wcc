import React from 'react';
import { 
  FolderPlusIcon, 
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';

interface ToolbarProps {
  onCreateFolder: () => void;
  onUpload: () => void;
  isSelectionMode: boolean;
  selectedCount: number;
  onToggleSelection: () => void;
  onExport: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onCreateFolder,
  onUpload,
  isSelectionMode,
  selectedCount,
  onToggleSelection,
  onExport,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="h-14 border-b bg-white px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button
          onClick={onCreateFolder}
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <FolderPlusIcon className="h-4 w-4 mr-1" />
          新建文件夹
        </button>
        <button
          onClick={onUpload}
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
        >
          <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
          导入
        </button>
        <button
          onClick={onToggleSelection}
          className={`inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md ${
            isSelectionMode 
              ? 'text-white bg-blue-600 hover:bg-blue-700' 
              : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <FolderIcon className="h-4 w-4 mr-1" />
          {isSelectionMode ? '取消选择' : '选择文件'}
        </button>
        {isSelectionMode && selectedCount > 0 && (
          <button
            onClick={onExport}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
          >
            <ArrowUpTrayIcon className="h-4 w-4 mr-1" />
            导出 ({selectedCount})
          </button>
        )}
      </div>
      
      <div className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="搜索文件夹..."
          className="px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};