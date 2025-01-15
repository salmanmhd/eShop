import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(
    useSelector((state) => state.product.products),
  );
  const itemPerPage = 12;
  const numPages = Math.ceil(products.length / itemPerPage);
  const pagesArray = Array.from({ length: numPages }, (_, i) => i + 1);
  const allProducts = useSelector((state) => state.product.products);
  const [currentPage, setCurrentPage] = useState(1);

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
  }, [query, allProducts]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  function handlePageClick(page) {
    setCurrentPage(Number(page));
  }

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
          <select className="h-8 w-40 rounded-lg bg-gray-700 text-center text-white">
            <option value="default">Choose category</option>
            {categories.map((category, i) => (
              <option className="" key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-cards-container grid grid-cols-auto-fill justify-center gap-8">
        {products.length !== 0 ? (
          products
            .slice(
              itemPerPage * currentPage - itemPerPage + 1,
              currentPage * itemPerPage + 1,
            )
            .map((product, i) => <ProductCard product={product} key={i} />)
        ) : (
          <div className="absolute left-1 top-[15rem] z-20 mt-10 w-full text-center text-4xl">
            No Item found :(
          </div>
        )}
      </div>
      {numPages > 1 && (
        <div className="pagination my-6 flex items-center justify-center gap-4">
          <PageComponent
            text={"Prev"}
            onPageChange={handlePageClick}
            currentPage={currentPage}
            className={currentPage === 1 ? "invisible" : ""}
          />
          {pagesArray.map((page, i) => (
            <PageComponent
              text={page}
              key={i}
              currentPage={currentPage}
              onPageChange={handlePageClick}
            />
          ))}
          <PageComponent
            text={"Next"}
            onPageChange={handlePageClick}
            currentPage={currentPage}
            className={currentPage === numPages ? "invisible" : ""}
          />
        </div>
      )}
    </div>
  );
}

function PageComponent({ text, onPageChange, currentPage, className = "" }) {
  function handleClick() {
    if (text === "Prev") {
      onPageChange(currentPage - 1);
      return;
    }

    if (text === "Next") {
      onPageChange(currentPage + 1);
      return;
    }
    onPageChange(text);
  }
  return (
    <p
      onClick={handleClick}
      className={`${
        Number(text) === currentPage ? "font-bold text-blue-400" : ""
      } ${className} pagination-item cursor-pointer text-white hover:text-gray-300`}
    >
      {text}
    </p>
  );
}
