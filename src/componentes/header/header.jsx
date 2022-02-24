import React from "react";
import { useCounterDishes } from "../../context/ContextMenu";
import { StyledHeader, StyledMenuBox } from "./headerStyled";
import { Link } from "react-router-dom";
import { useAuth, useHandleLogout } from "../../context/AuthContext";

const Header = () => {
  const counterDishes = useCounterDishes();
  const auth = useAuth();
  const handleLogout = useHandleLogout();

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
        {auth ? (
          <button onClick={() => handleLogout()}>Logout</button>
        ) : (
          <div>
            <Link to="/login">Login</Link>
          </div>
        )}
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
