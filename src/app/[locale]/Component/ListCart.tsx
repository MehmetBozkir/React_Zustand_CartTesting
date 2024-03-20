"use client";

import DeleteButton from "./DeleteButton";
import { useCartStore } from "../store/cart";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function ListCart() {
  const { cart } = useCartStore();
  return (
    <div className="flex flex-col mt-4 shadow-2xl bg-base-100 bg-opacity-40">
      <table className="text-white">
        <tbody>
          {cart.length ? (
            cart.map((item, index) => (
              <tr key={item.id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-right w-20">{item.name}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.count}</td>
                <td className="text-center w-46">{item.count * item.price}</td>
                <td className="text-center w-48">
                  <DeleteButton idProduct={item.id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center text-slate-600 py-2">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
