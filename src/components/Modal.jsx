import React, { useContext } from "react";
import "../components/Modal.css";
import CartContext from "../store/CartContext";

function Modal({ modalref }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const calculateTotalCost = () => {
    const total = cart.reduce((prev, current) => {
      return prev + current.price * current.quantity;
    }, 0);
    return total;
  };
  return (
    <dialog ref={modalref} className="dialog">
      <h1>Cart Details </h1>
      <form method="dialog">
        <button>X</button>
      </form>
      {cart.length > 0 ? (
        <>
          {" "}
          <div className="cart-items">
            <ol>
              {cart.map((item, index) => {
                return (
                  <>
                    <div className="c" key={item.id}>
                      <li>{item.title}</li>
                      <div className="actions">
                        <button onClick={() => removeFromCart(item.id)}>
                          -
                        </button>
                        <h1>{item.quantity}</h1>
                        <button onClick={() => addToCart(item.id)}>+</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </ol>
          </div>
          <hr />
          <span>Total Cost =</span> <span>{calculateTotalCost()} $</span>{" "}
        </>
      ) : (
        <p>No Prodcuts In Cart</p>
      )}
    </dialog>
  );
}

export default Modal;
