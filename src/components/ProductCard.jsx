import React from 'react';
import { useSetRecoilState } from 'recoil';
import { cartState } from '../store/cartStore';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';
import ProductList from './ProductList';

export default function ProductCard({ product }) {
  const setCart = useSetRecoilState(cartState);

  const addToCart = () => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success('Added to cart!');
  
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
         <div className="relative pb-2/3">
        <img src={product.image} alt={product.title} className="absolute h-full w-full object-cover" />
      </div>
      {/* <div className="relative pb-2/3">
        <img src={product.image} alt={product.title} className="absolute h-full w-full object-cover" />
      </div> */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button
          onClick={addToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}