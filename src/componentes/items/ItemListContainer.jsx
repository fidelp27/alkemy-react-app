import React from "react";
import ItemList from "./ItemList";
import { useDishes, useMenu } from "../../context/ContextMenu";
import Menu from "../Menu/Menu";
import Login from "../form/login";
import { useAuth } from "../../context/AuthContext";

const ItemListContainer = () => {
  const menu = useMenu();
  const auth = useAuth();
  const dishes = useDishes();

  return auth ? (
    <>
      {menu?.length > 0 ? <Menu /> : ""}
      <ItemList dishes={dishes} />;
    </>
  ) : (
    <Login />
  );
};
export default ItemListContainer;
