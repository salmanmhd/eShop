const cartItems = [
  {
    id: 1,
    title: "Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    quantity: 1,
  },
];

function addItems(item) {
  let isAvailable = false;
  for (const element of cartItems) {
    if (element.id === item.id) {
      element.quantity++;
      isAvailable = true;
      return;
    }
  }
  if (!isAvailable) {
    item.quantity = 1;
    cartItems.push(item);
  }
  cartItems.map((el) => (el.id === item.id ? "" : el));
}

const newItem = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};
const newItem1 = {
  id: 199,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 10000,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};
addItems(newItem1);
addItems(newItem1);
addItems(newItem1);
addItems(newItem1);

console.log(cartItems);
