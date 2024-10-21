import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = debounce((term) => {
    onSearch(term);
  }, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
    return debouncedSearch.cancel;
  }, [searchTerm]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 pl-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}