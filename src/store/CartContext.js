import { createContext, useContext } from "react";

const CartContext = createContext({
  products: [],
  cart: [],
  loading: true,
  error: false,
  errorname: "",
  addtocart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
