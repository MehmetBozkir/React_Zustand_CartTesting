"use client";

import Image from "next/image";
import CoffeeImage from "../../../public/product-image/coffee.jpg";
import { formatNumber } from "../utils/format";
import { useCartStore } from "../store/cart";
import { Product } from "../models/product";

type ProductCartProps = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ id, name, price }: ProductCartProps) {
  const { add: handleAddToCart } = useCartStore();
  const product = { id, name, price } as Product;

  return (
    <div className="border p-3 rounded-xl border-slate-700">
      <div className="bg-gray-300 rounded-md mb-2">
        <Image
          src={CoffeeImage}
          alt="coffee"
          width={400}
          height={400}
          className="w-[180px] h-[180px] rounded object-cover"
        />
      </div>
      <h2 className="text-white">{name}</h2>
      <h2 className="font-semibold text-green-400">$ {formatNumber(price)}</h2>
      <button
        onClick={() => handleAddToCart(product)}
        className="mt-4 font-semibold text-sm bg-slate-100 text-slate-800 rounded-md py-2 text-center w-full"
      >
        Add To Cart
      </button>
    </div>
  );
}
