"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
export default function OrderSummary() {
    const order = useStore((state) => state.order);
    const total = useMemo(
        () =>
            order.reduce(
                (total, item) => total + item.quantity * item.price,
                0
            ),
        [order]
    );
    return (
        <>
            <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
                <h1 className="text-4xl text-center font-black">Mi pedido</h1>
                {order.length === 0 ? (
                    <p className="text-center my-10"> El pedido esta vacio</p>
                ) : (
                    <div className="mt-5">
                        {order.map((item) => (
                            <ProductDetails key={item.id} item={item} />
                        ))}

                        <p className="text-2xl mt-20 text-center">
                            Total a pagar: {""}
                            <span className="font-bold text-center">
                                {formatCurrency(total)}
                            </span>
                        </p>
                        <form className="w-full mt-10 space-y-5" action="">
                            <input
                                type="submit"
                                className="py-2 rounded uppercase text-white bg-slate-900 w-full font-bold text-center cursor-pointer hover:bg-slate-800"
                                value={`Confirmar Pedido`}
                            />
                        </form>
                    </div>
                )}
            </aside>
        </>
    );
}
