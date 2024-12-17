import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onCreateFolder: () => void;
  onCreateSummary: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCreateFolder, onCreateSummary }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">朋友圈记录</h1>
        <div className="flex space-x-4">
          <button
            onClick={onCreateFolder}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            新建文件夹
          </button>
          <button
            onClick={onCreateSummary}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            新建汇总
          </button>
        </div>
      </div>
    </header>
  );
};