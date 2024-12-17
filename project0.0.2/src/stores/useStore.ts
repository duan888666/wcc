import create from 'zustand';
import { User, Folder, MomentsSummary } from '../types';

interface Store {
  users: User[];
  folders: Folder[];
  momentsSummaries: MomentsSummary[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, userData: Omit<User, 'id'>) => void;
  deleteUser: (id: string) => void;
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
  
  updateUser: (id, userData) => set((state) => ({
    users: state.users.map(user => 
      user.id === id ? { ...userData, id } : user
    )
  })),
  
  deleteUser: (id) => set((state) => ({
    users: state.users.filter(user => user.id !== id)
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