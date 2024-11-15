import React, { useContext, useRef } from "react";
import CartContext from "../store/CartContext";
import "../components/Header.css";
import Modal from "./Modal";

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
          <button onClick={openModal}>{cart.length}</button>
        </div>
      </div>
      <Modal modalref={modalref} />
    </>
  );
}

export default Header;
