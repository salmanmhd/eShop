export default function ProductCard({ product }) {
  return (
    <div className="product-card flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 shadow-lg">
      <img
        src={product.image}
        alt={`${product.title}'s image`}
        className="product-image contrast-90 mb-6 aspect-square h-60 w-60 rounded-md object-contain"
      />
      <div className="product-details w-full">
        <h3 className="product-name mb-2 line-clamp-2 overflow-hidden text-xl font-medium">
          {product.title}
        </h3>
        <p className="product-price mb-4 text-lg">{`$${product.price}`}</p>
        <button className="add-to-cart-btn mb-2 me-2 w-full rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
