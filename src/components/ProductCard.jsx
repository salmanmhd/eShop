export default function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="product-card flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 shadow-lg">
      <img
        src={product.image}
        alt={`${product.title}'s image`}
        className="product-image contrast-90 mb-6 aspect-square h-60 w-60 rounded-md object-contain"
      />
      <div className="product-details w-full">
        <h3 className="product-name mb-2 text-xl font-medium">
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

// {
//   id: 9,
//   title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//   price: 64,
//   description:
//     "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//   category: "electronics",
//   image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//   rating: {
//     rate: 3.3,
//     count: 203,
//   },
// },
