import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/productSlice";

export default function NavItems({ setProducts }) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const allProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      const filteredProducts = allProducts.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setProducts(filteredProducts);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, allProducts, setProducts]);

  function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    console.log("searchng");
  }

  function handleChangeCategory(e) {
    const category = e.target.value;
    dispatch(getCategories(category));
    setSelectedCategory(category);
  }

  return (
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
        <select
          value={selectedCategory || "default"}
          onChange={(e) => handleChangeCategory(e)}
          className="h-10 w-48 rounded-lg bg-gray-700 px-3 py-2 pl-2 text-left text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option disabled value="default">
            Choose category
          </option>
          {categories.map((category, i) => (
            <option key={i} value={category} className="bg-gray-700 text-white">
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
