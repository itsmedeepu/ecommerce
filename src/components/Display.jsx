import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import "../components/Display.css";
import CircularProgress from "@mui/material/CircularProgress";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Display() {
  const {
    products,
    cart,
    addToCart,
    loading,
    removeFromCart,
    error,
    errorname,
  } = useContext(CartContext);
  const checkItemInCart = (id) => {
    return cart.find((item) => item.id === id);
  };
  const getQuantity = (id) => {
    const { quantity } = cart.find((product) => product.id === id);

    return quantity;
  };
  return (
    <>
      {error && <h1>{errorname}</h1>}
      <div className="products">
        {loading && <CircularProgress color="secondary" />}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} width={100} height={100} />
            <h3>{product.title}</h3>
            <h2>{product.price}$</h2>
            {checkItemInCart(product.id) ? (
              <>
                <RemoveCircleIcon
                  onClick={() => removeFromCart(product.id)}
                ></RemoveCircleIcon>
                <h2 className="card-2">{getQuantity(product.id)}</h2>
                <AddCircleOutlineIcon
                  onClick={() => addToCart(product.id)}
                ></AddCircleOutlineIcon>
              </>
            ) : (
              <button onClick={() => addToCart(product.id)}>Add To cart</button>
            )}

            {/* <p>{product.description}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Display;
