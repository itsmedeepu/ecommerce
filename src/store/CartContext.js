import { createContext, useContext } from "react";

const CartContext = createContext({
  products: [],
  cart: [],
  loading: true,
  error: false,
  addtocart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
