import React from 'react';

export default function FilterBar({ category, setCategory }) {
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            category === cat
              ? 'bg-blue-600 text-white shadow-md transform scale-105'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow'
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
