import { Trash, CirclePlus, CircleMinus } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeItem, addQuantity, removeQuantity } from "../features/cartSlice";

export default function CartItem({ cart = {} }) {
  const { title, price, image, id, quantity } = cart;
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeItem(id));
  }
  return (
    <div className="cart-item flex items-center rounded-lg bg-gray-700 p-4">
      <img
        src={image}
        alt="Product Name"
        className="cart-item-image square mr-4 size-24 rounded-md bg-white object-contain"
      />
      <div className="cart-item-details flex-1">
        <h4 className="cart-item-name line-clamp-2 overflow-hidden text-sm font-semibold">
          {title}
        </h4>
        <p className="cart-item-price mb-5 mt-2 text-sm">{`$${price}`}</p>
        <div className="quantity flex justify-between">
          <div className="flex gap-2">
            <button onClick={() => dispatch(removeQuantity(id))}>
              <CircleMinus width={"20px"} className="text-red-600" />
            </button>
            <p className="font-lg">{quantity}</p>
            <button onClick={() => dispatch(addQuantity(id))}>
              <CirclePlus width={"20px"} className="text-green-600" />
            </button>
          </div>
          <button onClick={handleDelete}>
            <Trash width={"20px"} className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
