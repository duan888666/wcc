export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Folder {
  id: string;
  name: string;
  createdAt: Date;
}

export interface MomentsSummary {
  id: string;
  title: string;
  date: Date;
  users: string[]; // User IDs
}

export type ViewType = 'folders' | 'users' | 'summary';

export interface MenuItem {
  id: ViewType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}