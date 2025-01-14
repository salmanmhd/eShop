import { useState } from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./cart.css";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setShowCart((show) => !show)}
        className="absolute right-8 top-24 z-10 ml-auto mt-1 h-10 w-36 rounded-full bg-yellow-400 px-4 py-2.5 text-center text-sm font-medium text-white drop-shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-300"
      >
        Cart
      </button>
      {showCart && (
        <div className="cart custom-scrollbar absolute right-8 top-44 z-20 h-[37rem] w-96 overflow-y-auto rounded-lg bg-slate-950 p-6 shadow-2xl shadow-black">
          <h2 className="mb-6 text-2xl font-semibold">Your Cart</h2>
          <div className="cart-items-container space-y-4">
            {cartItems.map((cart, i) => (
              <CartItem key={i} cart={cart} />
            ))}
          </div>
          <div className="cart-summary mt-6">
            <p className="mb-4 text-lg font-medium">Total: $100.00</p>
            <button className="checkout-btn mb-2 me-2 w-36 rounded-full bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-green-300">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
