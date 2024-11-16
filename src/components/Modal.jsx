import React, { useContext } from "react";
import "../components/Modal.css";
import CartContext from "../store/CartContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

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
          <table>
            {cart.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.title}</td>
                    <td>
                      <RemoveCircleIcon
                        onClick={() => removeFromCart(item.id)}
                      ></RemoveCircleIcon>
                      <h2 className="card-2">{item.quantity}</h2>
                      <AddCircleOutlineIcon
                        onClick={() => addToCart(item.id)}
                      ></AddCircleOutlineIcon>
                    </td>
                  </tr>
                </>
              );
            })}
            <tr></tr>
          </table>
          {/* <div className="cart-items">
            <ol>
              {cart.map((item, index) => {
                return (
                  <>
                    <div className="c" key={item.id}>
                      <li>{item.title}</li>
                      <div className="actions">
                        <RemoveCircleIcon
                          onClick={() => removeFromCart(item.id)}
                        ></RemoveCircleIcon>
                        <h2 className="card-2">{item.quantity}</h2>
                        <AddCircleOutlineIcon
                          onClick={() => addToCart(item.id)}
                        ></AddCircleOutlineIcon>
                      </div>
                    </div>
                  </>
                );
              })}
            </ol>
          </div> */}
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
