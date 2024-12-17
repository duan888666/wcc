import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Toolbar } from './components/Toolbar';
import { FileExplorer } from './components/FileExplorer';
import { CreateFolderModal } from './components/CreateFolderModal';
import { UserList } from './components/UserList';
import { useStore } from './stores/useStore';
import { ViewType } from './types';

export const App: React.FC = () => {
  const { addFolder } = useStore();
  const [currentView, setCurrentView] = useState<ViewType>('folders');
  const [showCreateFolder, setShowCreateFolder] = useState(false);

  const handleCreateFolder = (name: string) => {
    addFolder(name);
    setShowCreateFolder(false);
  };

  const handleUpload = () => {
    // TODO: Implement file upload
    alert('文件上传功能即将推出');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {currentView === 'folders' && (
          <Toolbar
            onCreateFolder={() => setShowCreateFolder(true)}
            onUpload={handleUpload}
          />
        )}
        
        <main className="flex-1 overflow-auto">
          {currentView === 'folders' && <FileExplorer />}
          {currentView === 'users' && <UserList />}
          {currentView === 'summary' && (
            <div className="p-4">
              <h2 className="text-xl font-bold">数据汇总</h2>
              <p className="text-gray-500 mt-2">功能开发中...</p>
            </div>
          )}
        </main>
      </div>

      <CreateFolderModal
        isOpen={showCreateFolder}
        onClose={() => setShowCreateFolder(false)}
        onConfirm={handleCreateFolder}
      />
    </div>
  );
};

export default App;