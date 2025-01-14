import { useEffect } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { getProducts } from "./features/productSlice";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="app-container min-h-screen bg-gray-900 p-8 text-white">
      <header className="header mb-10 text-center">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
      </header>
      <div className="main-content flex justify-between">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
