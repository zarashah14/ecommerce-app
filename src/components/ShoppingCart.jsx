import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function ShoppingCart() {
  const [cart, setCart] = useRecoilState(cartState);

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-96 h-fit">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
      <AnimatePresence>
        {cart.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-between mb-4 border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-1 text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="mt-4 pt-4 border-t">
        <p className="text-xl font-bold text-gray-800">Total: ${totalPrice.toFixed(2)}</p>
        <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}