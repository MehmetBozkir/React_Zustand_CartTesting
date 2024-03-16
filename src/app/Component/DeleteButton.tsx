import { Product } from "../models/product";
import { Popover, Transition } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useCartStore } from "../store/cart";

type Props = { idProduct: number };

export default function DeleteButton({ idProduct }: Props) {
  const { remove } = useCartStore();
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button className="relative p-2 rounded-md hover:bg-slate-900 text-slate-700 hover:text-slate-300 transition duration-200 ease-in-out">
            <TrashIcon className="w-5 h-5" />
          </Popover.Button>

          <Popover.Panel className="">
            <div className=" absolute right-0 -top-12 z-20 w-40  overflow-hidden rounded-lg shadow-lg">
              <div className="bg-slate-900 p-2">
                <button
                  type="button"
                  className="font-semibold text-red-400 hover:bg-red-400 hover:bg-opacity-10 px-4 text-sm py-2 rounded-md"
                  onClick={() => {
                    remove(idProduct);
                    close();
                  }}
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
