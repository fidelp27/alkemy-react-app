import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getDishes from "../../helpers/helper";
import Swal from "sweetalert2";

const ItemListContainer = () => {
  const [dishes, setDishes] = useState([]);
  const [menu, setMenu] = useState([]);

  const getDishesList = () => {
    getDishes().then((res) => {
      setDishes(res);
    });
  };

  const isOnMenu = (item) => {
    return menu?.findIndex((dish) => dish.id === item.id);
  };

  const addToMenu = (item) => {
    if (isOnMenu(item) === -1 && menu.length <= 3) {
      setMenu([item, ...menu]);
    } else {
      if (menu.length === 4) {
        Swal.fire("Menu complete", "The menu only accept 4 dishes", "warning");
      }
      if (isOnMenu(item) !== -1) {
        Swal.fire(
          "Duplicated",
          "This dish was already added to the menu",
          "error"
        );
      }
    }
  };
  console.log(menu);

  useEffect(() => {
    getDishesList();
  }, []);

  return (
    <div>
      <ItemList dishes={dishes} addToMenu={addToMenu} />
    </div>
  );
};
export default ItemListContainer;
