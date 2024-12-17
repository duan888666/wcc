import { useState, useMemo } from 'react';

export const useSearch = <T extends { name: string }>(items: T[], initialQuery: string = '') => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return items;
    
    return items.filter(item =>
      item.name.toLowerCase().includes(query)
    );
  }, [items, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems
  };
};