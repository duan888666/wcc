export type ViewType = 'folders' | 'users' | 'summary';

export interface MenuItem {
  id: ViewType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}