import React, { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import fetchData from "../utility/http";

const initialState = {
  products: [],
  cart: [],
  loading: true, // Initial loading state set to true
  error: false,
};

function reducerFunction(state, action) {
  switch (action.type) {
    case "FETCH_DATA": {
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };
    }

    case "ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case "ADD": {
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.product.id
      );
      let updatedCart;

      if (existingCartItem) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newProduct = { ...action.payload.product, quantity: 1 };
        updatedCart = [...state.cart, newProduct];
      }

      return { ...state, cart: updatedCart };
    }
    case "REMOVE": {
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.product.id
      );
      let updatedCart;

      if (existingCartItem) {
        if (existingCartItem.quantity - 1 === 0) {
          return {
            ...state,
            cart: state.cart.filter(
              (item) => item.id != action.payload.product.id
            ),
          };
        }
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        const newProduct = { ...action.payload.product, quantity: 1 };
        updatedCart = [...state.cart, newProduct];
      }

      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
}

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await fetchData();
        dispatch({
          type: "FETCH_DATA",
          payload: {
            products,
          },
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
        });
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (id) => {
    const foundProduct = state.products.find((product) => product.id === id);
    if (foundProduct) {
      dispatch({
        type: "ADD",
        payload: {
          product: foundProduct,
        },
      });
    }
  };

  const removeFromCart = (id) => {
    const foundProduct = state.products.find((product) => product.id === id);
    if (foundProduct) {
      dispatch({
        type: "REMOVE",
        payload: {
          product: foundProduct,
        },
      });
    }
  };

  const cartContextValue = {
    products: state.products,
    cart: state.cart,
    loading: state.loading,
    error: state.error,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
