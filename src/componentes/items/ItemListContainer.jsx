import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getDishes from "../../helpers/helper";
import { useMenu } from "../../context/ContextMenu";
import Menu from "../Menu/Menu";
import Login from "../form/login";
import { useAuth } from "../../context/AuthContext";

const ItemListContainer = () => {
  const [dishes, setDishes] = useState([]);
  const menu = useMenu();
  const auth = useAuth();

  const getDishesList = () => {
    getDishes().then((res) => {
      setDishes(res);
    });
  };

  useEffect(() => {
    getDishesList();
  }, []);

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
