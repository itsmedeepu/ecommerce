import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import "../components/Display.css";

function Display() {
  const { products, cart, addToCart, loading, removeFromCart } =
    useContext(CartContext);
  const checkItemInCart = (id) => {
    return cart.find((item) => item.id === id);
  };
  const getQuantity = (id) => {
    const { quantity } = cart.find((product) => product.id === id);

    return quantity;
  };
  return (
    <div className="products">
      {loading && <p>Loading..</p>}
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} width={100} height={100} />
          <h3>{product.title}</h3>
          <h2>{product.price}$</h2>
          {checkItemInCart(product.id) ? (
            <>
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <h2 className="card-2">{getQuantity(product.id)}</h2>
              <button onClick={() => addToCart(product.id)}>+</button>
            </>
          ) : (
            <button onClick={() => addToCart(product.id)}>Add To cart</button>
          )}

          {/* <p>{product.description}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Display;
