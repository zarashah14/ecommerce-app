import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

const fetchProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  console.log(response.data)
  return response.data;
};

export default function ProductList() {
  const { data: products, isLoading, error } = useQuery('products', fetchProducts);
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div className="text-center text-2xl font-bold text-gray-600">Loading products...</div>;
  if (error) return <div className="text-center text-2xl font-bold text-red-500">Error fetching products: {error.message}</div>;

  const filteredProducts = products.filter(product => 
    (category === 'all' || product.category === category) &&
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-6">
      <SearchBar onSearch={setSearchTerm} />
      <FilterBar category={category} setCategory={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}