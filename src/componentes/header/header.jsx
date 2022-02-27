import React from "react";
import { useCounterDishes } from "../../context/ContextMenu";
import { StyledButton, StyledHeader, StyledMenuBox } from "./headerStyled";
import { Link } from "react-router-dom";
import { useAuth, useHandleLogout } from "../../context/AuthContext";
import Search from "../search/search";

const Header = () => {
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
          <>
            <Search />
            <StyledButton onClick={() => handleLogout()}>
              {" "}
              <img src="https://i.imgur.com/JvNcx3u.png" alt="logout" /> Logout
            </StyledButton>
          </>
        ) : (
          ""
        )}
      </StyledHeader>
    </>
  );
};
export default Header;
