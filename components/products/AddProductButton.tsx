"use client";

import { Product } from "@prisma/client";
import { useStore } from "@/src/store";
type AddProductButtonProps = {
    product: Product;
};
export default function AddProductButton({ product }: AddProductButtonProps) {
    const addToOrder = useStore((state) => state.addToOrder);
    return (
        <button
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full sm:w-auto mt-5 p-3 uppercase font-bold cursor-pointer"
            onClick={() => addToOrder(product)}
        >
            Agregar
        </button>
    );
}
