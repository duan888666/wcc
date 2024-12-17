import React, { useState } from 'react';
import { 
  PlusIcon, 
  FolderPlusIcon, 
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  FolderIcon
} from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';

interface ToolbarProps {
  onCreateFolder: () => void;
  onUpload: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onCreateFolder, onUpload }) => {
  const [showExport, setShowExport] = useState(false);

  const handleFileSelect = () => {
    setShowExport(true);
  };

  const handleExport = () => {
    // TODO: Implement export functionality
    alert('导出功能即将推出');
  };

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
          <ArrowUpTrayIcon className="h-4 w-4 mr-1" />
          导入
        </button>
        <Menu as="div" className="relative">
          <Menu.Button
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
            onClick={handleFileSelect}
          >
            <FolderIcon className="h-4 w-4 mr-1" />
            选择文件
          </Menu.Button>
          {showExport && (
            <Menu.Items className="absolute left-0 mt-1 w-40 bg-white rounded-md shadow-lg border">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleExport}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } w-full text-left px-4 py-2 text-sm flex items-center`}
                  >
                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                    导出
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </Menu>
      </div>
      
      <div className="flex items-center">
        <input
          type="text"
          placeholder="搜索文件夹..."
          className="px-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};