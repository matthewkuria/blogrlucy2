import React from "react";
import open from "/icon-hamburger.svg";
import close from "/icon-close.svg";
const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}
      </button>
    </>
  );
};

export default Menu;
