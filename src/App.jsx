import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="app-container min-h-screen bg-gray-900 p-8 text-white">
      <header className="header mb-10">
        <h1 className="w-fit rounded-full border border-white px-4 pb-5 pt-3 text-4xl font-bold leading-3 text-yellow-300">
          eShop
        </h1>
      </header>
      <div className="main-content flex justify-between">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
