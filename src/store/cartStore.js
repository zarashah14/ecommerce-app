// src/store/cartStore.js
import { atom } from 'recoil';

// Define the cartState atom
export const cartState = atom({
  key: 'cartState', // unique ID for the atom
  default: [], // default value, an empty array to hold cart items
});
