import { useDispatch } from "react-redux";
import { add } from "../features/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart() {
    const { id, title, price, image } = product;
    const cartItem = { id, title, price, image };
    dispatch(add(cartItem));
  }

  return (
    <div className="product-card flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 shadow-lg">
      <img
        src={product.image}
        alt={`${product.title}'s image`}
        className="product-image contrast-90 mb-6 aspect-square size-60 rounded-md bg-white object-contain drop-shadow-lg"
      />
      <div className="product-details w-full">
        <h3 className="product-name line-clamp-2 h-[3.5rem] overflow-hidden text-xl font-medium">
          {product.title}
        </h3>
        <p className="product-price mb-4 text-lg">{`$${product.price}`}</p>
        <button
          onClick={handleAddToCart}
          className="add-to-cart-btn mb-2 me-2 w-full rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
