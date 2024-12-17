import create from 'zustand';
import { User, Folder, MomentsSummary } from '../types';

interface Store {
  users: User[];
  folders: Folder[];
  momentsSummaries: MomentsSummary[];
  addUser: (user: Omit<User, 'id'>) => void;
  addFolder: (name: string) => void;
  addMomentsSummary: (summary: Omit<MomentsSummary, 'id'>) => void;
}

export const useStore = create<Store>((set) => ({
  users: [],
  folders: [],
  momentsSummaries: [],
  
  addUser: (userData) => set((state) => ({
    users: [...state.users, { ...userData, id: crypto.randomUUID() }]
  })),
  
  addFolder: (name) => set((state) => ({
    folders: [...state.folders, {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date()
    }]
  })),
  
  addMomentsSummary: (summaryData) => set((state) => ({
    momentsSummaries: [...state.momentsSummaries, {
      ...summaryData,
      id: crypto.randomUUID()
    }]
  }))
}));