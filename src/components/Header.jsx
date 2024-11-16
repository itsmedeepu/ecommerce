import React, { useContext, useRef } from "react";
import CartContext from "../store/CartContext";
import "../components/Header.css";
import Modal from "./Modal";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Header() {
  const { cart } = useContext(CartContext);
  const modalref = useRef();

  const openModal = () => {
    modalref.current.showModal();
  };
  return (
    <>
      <div className="Navbar">
        <div className="logo"></div>
        <div className="nav-elements">
          <AddShoppingCartIcon onClick={openModal}></AddShoppingCartIcon>{" "}
          {cart.length}
        </div>
      </div>
      <Modal modalref={modalref} />
    </>
  );
}

export default Header;
