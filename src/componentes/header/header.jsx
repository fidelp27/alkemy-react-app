import React from "react";
import { useCounterDishes } from "../../context/ContextMenu";
import { StyledHeader, StyledMenuBox } from "./headerStyled";
import { Link } from "react-router-dom";

const Header = () => {
  const counterDishes = useCounterDishes();
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <img
            className="logo"
            src="https://i.imgur.com/lpVqC7o.png"
            alt="logo"
          />
        </Link>

        <StyledMenuBox>
          <img
            className="menu-img"
            src="../../assets/menu-icon.svg"
            alt="menu"
          />

          {counterDishes > 0 ? <span>{counterDishes} </span> : ""}
        </StyledMenuBox>
      </StyledHeader>
    </>
  );
};
export default Header;
