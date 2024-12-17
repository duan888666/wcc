import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface ImageDropzoneProps {
  onImageSelect: (base64: string) => void;
  currentImage?: string;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onImageSelect, currentImage }) => {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        onImageSelect(base64);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1,
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`relative w-full h-32 border-2 border-dashed rounded-lg 
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
        hover:border-blue-500 transition-colors cursor-pointer
        flex flex-col items-center justify-center p-4`}
    >
      <input {...getInputProps()} />
      {currentImage ? (
        <div className="relative w-full h-full">
          <img
            src={currentImage}
            alt="Avatar preview"
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity flex items-center justify-center">
            <span className="text-white opacity-0 hover:opacity-100">更换图片</span>
          </div>
        </div>
      ) : (
        <>
          <PhotoIcon className="w-8 h-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500">
            {isDragActive ? '放开以上传图片' : '拖拽图片至此或点击上传'}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            支持 PNG、JPG、JPEG、GIF
          </p>
        </>
      )}
    </div>
  );
};