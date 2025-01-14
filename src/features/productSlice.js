const initialState = {
  products: [],
  isLoading: false,
  query: "",
  catoegory: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "product/get":
      return { ...state, products: action.payload, isLoading: false };
    case "product/loading":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export function getProducts() {
  return async (dispatch, getState) => {
    dispatch({ type: "product/loading" });
    const res = await fetch("https://fakestoreapi.com/products?limit=20");
    const data = await res.json();
    dispatch({ type: "product/get", payload: data });
  };
}
