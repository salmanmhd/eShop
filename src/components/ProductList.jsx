import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="product-list w-full">
      <h2 className="mb-6 text-2xl font-semibold">Products</h2>
      <div className="product-cards-container grid-cols-auto-fill grid justify-center gap-8">
        {products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </div>
  );
}
