import React from 'react';
import { FolderIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { ViewType, MenuItem } from '../types';

interface SidebarProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const menuItems: MenuItem[] = [
  { id: 'folders', icon: FolderIcon, label: '文件夹' },
  { id: 'users', icon: UsersIcon, label: '用户管理' },
  { id: 'summary', icon: ChartBarIcon, label: '数据汇总' },
];

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentView }) => {
  return (
    <div className="w-64 bg-gray-800 h-screen flex-shrink-0">
      <div className="flex flex-col h-full">
        <div className="px-4 py-5">
          <h1 className="text-white text-xl font-bold">朋友圈记录</h1>
        </div>
        <nav className="mt-5 flex-1">
          <div className="space-y-1">
            {menuItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium ${
                  currentView === id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon className="mr-3 h-6 w-6" />
                {label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};