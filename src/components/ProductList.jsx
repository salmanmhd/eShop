import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [query, setQuery] = useState("");
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [products, setProducts] = useState(
    useSelector((state) => state.product.products),
  );
  const numPages = Math.floor(products.length / 12);

  const allProducts = useSelector((state) => state.product.products);

  useEffect(() => {
    let timeout = setTimeout(() => {
      const filteredProducts = allProducts.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      console.log(query);
      setProducts(filteredProducts);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, allProducts]);

  function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    console.log("searchng");
  }
  return (
    <div className="product-list w-full p-8">
      <div className="nav-items mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Products</h2>
        <form
          onSubmit={(e) => handleSearch(e)}
          className="ml-8 flex items-center rounded-lg bg-white"
        >
          <input
            className="h-8 w-96 rounded-l-lg border-none px-4 text-gray-900 focus:border-none focus:outline-none"
            placeholder="Search Items"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="rounded-r-lg p-2 text-gray-700">
            <Search className="text-gray-800" />
          </button>
        </form>
        <div className="flex items-center gap-4">
          <label className="text-white">Categories</label>
          <select className="h-8 w-32 rounded-lg bg-gray-700 text-center text-white">
            <option value="clothes">Clothes</option>
          </select>
        </div>
      </div>
      <div className="product-cards-container grid grid-cols-auto-fill justify-center gap-8">
        {products.length !== 0 ? (
          products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))
        ) : (
          <div className="absolute left-1 top-[15rem] z-20 mt-10 w-full text-center text-4xl">
            No Item found :(
          </div>
        )}
      </div>
      <div className="pagination my-6 flex items-center justify-center gap-4">
        <p className="pagination-item cursor-pointer text-white hover:text-gray-300">
          Prev
        </p>

        <p className="pagination-item cursor-pointer text-white hover:text-gray-300">
          2
        </p>
        <p className="pagination-item cursor-pointer text-white hover:text-gray-300">
          3
        </p>
        <p className="pagination-item cursor-pointer text-white hover:text-gray-300">
          Next
        </p>
      </div>
    </div>
  );
}

function PageC(params) {}
