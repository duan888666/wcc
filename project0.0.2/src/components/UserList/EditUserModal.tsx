import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ImageDropzone } from '../ImageUpload/ImageDropzone';
import { User } from '../../types';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (user: Omit<User, 'id'> & { id?: string }) => void;
  user?: User;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  user
}) => {
  const [userName, setUserName] = useState(user?.name || '');
  const [userAvatar, setUserAvatar] = useState(user?.avatar || '');

  useEffect(() => {
    if (user) {
      setUserName(user.name);
      setUserAvatar(user.avatar);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      onConfirm({
        id: user?.id,
        name: userName.trim(),
        avatar: userAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}`
      });
      setUserName('');
      setUserAvatar('');
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <Dialog.Title className="text-lg font-medium">
              {user ? '编辑用户' : '添加用户'}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                用户名称
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="输入用户名称"
                autoFocus
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                用户头像
              </label>
              <ImageDropzone
                onImageSelect={setUserAvatar}
                currentImage={userAvatar}
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {user ? '保存' : '添加'}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};