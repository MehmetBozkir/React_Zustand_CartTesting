import { Product } from "../models/product";

import { create } from "zustand";

interface CartItem extends Product {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: Product) => void;
  remove: (idProduct: number) => void;
  removeAll: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map((item) => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (product: Product) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart);
    set({ cart: updatedCart });
  },
  remove: (idProduct: number) => {
    const { cart } = get();
    const updatedCart = removeCart(idProduct, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
}));

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}
