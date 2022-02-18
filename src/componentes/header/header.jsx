import React from "react";
import { StyledHeader } from "./headerStyled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <img
          className="logo"
          src="https://i.imgur.com/lpVqC7o.png"
          alt="logo"
        />
        ;
        <img className="menu-img" src="../../assets/menu-icon.svg" alt="menu" />
      </StyledHeader>
    </>
  );
};
export default Header;
