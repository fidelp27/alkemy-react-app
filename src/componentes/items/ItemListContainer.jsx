import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getDishes from "../../helpers/helper";
import { useMenu } from "../../context/ContextMenu";
import Menu from "../Menu/Menu";

const ItemListContainer = () => {
  const [dishes, setDishes] = useState([]);
  const menu = useMenu();

  const getDishesList = () => {
    getDishes().then((res) => {
      setDishes(res);
    });
  };

  useEffect(() => {
    getDishesList();
  }, []);

  return (
    <>
      {menu?.length > 0 ? <Menu /> : ""}
      <ItemList dishes={dishes} />;
    </>
  );
};
export default ItemListContainer;
