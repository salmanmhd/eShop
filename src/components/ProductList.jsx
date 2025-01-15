import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useState } from "react";
import NavItems from "./NavItems";
import PageComponent from "./PageComponent";

export default function ProductList() {
  const [products, setProducts] = useState(
    useSelector((state) => state.product.products),
  );
  const itemPerPage = 12;
  const numPages = Math.ceil(products.length / itemPerPage);
  const pagesArray = Array.from({ length: numPages }, (_, i) => i + 1);

  const [currentPage, setCurrentPage] = useState(1);

  function handlePageClick(page) {
    setCurrentPage(Number(page));
  }

  return (
    <div className="product-list w-full p-8">
      <NavItems setProducts={setProducts} />
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
