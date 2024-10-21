import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartState } from '../store/cartStore';
import { ShoppingCart, ShoppingBag } from 'lucide-react';

export default function Header() {
  const cart = useRecoilValue(cartState);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShoppingBag size={32} />
          <h1 className="text-3xl font-bold">E-Shop</h1>
        </div>
        <div className="relative group">
          <ShoppingCart size={28} className="cursor-pointer transform transition-transform group-hover:scale-110" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:animate-pulse">
              {cartItemsCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}