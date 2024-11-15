import { useContext, useEffect } from "react";
import "./App.css";
import CartContext from "./store/CartContext";
import Header from "./components/Header";
import Display from "./components/Display";
function App() {
  const { products, cart, addToCart, loading, error } = useContext(CartContext);

  console.log(loading);

  console.log(cart);
  return (
    <>
      <Header />
      <Display />
    </>
  );
}

export default App;
