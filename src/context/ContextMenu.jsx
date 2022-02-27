import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { getDishes, searchDishes } from "../helpers/helper";

const ContextMenu = React.createContext();

export function MenuProvider({ children }) {
  const [dishes, setDishes] = useState([]);
  const [menu, setMenu] = useState([]);
  const [counterDishes, setCounterDishes] = useState(0);
  const [totalMenu, setTotalMenu] = useState(0);

  const isOnMenu = (item) => {
    return menu?.findIndex((dish) => dish.id === item.id);
  };

  const addToMenu = (item) => {
    setTotalMenu(totalMenu + 1);

    if (isOnMenu(item) === -1) {
      if (menu.length <= 3) {
        setMenu([item, ...menu]);
        setCounterDishes(counterDishes + 1);
      }
    }
    errors(item);
  };

  const deleteDish = (item) => {
    setMenu(menu?.filter((elem) => elem.id !== item.id));
    setCounterDishes(counterDishes - 1);
  };

  const errors = (item) => {
    if (menu.length === 4) {
      Swal.fire("Menu complete", "The menu only accept 4 dishes", "warning");
    }
    if (isOnMenu(item) !== -1) {
      Swal.fire(
        "Duplicated",
        "This dish was already added to the menu ",
        "error"
      );
    }
  };
  const getDishesList = () => {
    getDishes().then((res) => {
      setDishes(res);
    });
  };

  const searchDishesList = (query) => {
    searchDishes(query).then((res) => {
      setDishes(res);
      console.log(dishes);
    });
  };

  useEffect(() => {
    setMenu(menu);
  }, [menu]);

  useEffect(() => {
    getDishesList();
  }, []);

  return (
    <ContextMenu.Provider
      value={{
        menu,
        counterDishes,
        addToMenu,
        deleteDish,
        searchDishesList,
        dishes,
      }}
    >
      {children}
    </ContextMenu.Provider>
  );
}

export function useMenu() {
  return useContext(ContextMenu).menu;
}
export function useDishes() {
  return useContext(ContextMenu).dishes;
}

export function useAddToMenu() {
  return useContext(ContextMenu).addToMenu;
}
export function useCounterDishes() {
  return useContext(ContextMenu).counterDishes;
}
export function useDeleteDish() {
  return useContext(ContextMenu).deleteDish;
}

export function useGetDishesList() {
  return useContext(ContextMenu).getDishesList;
}
export function useSearchDishesList() {
  return useContext(ContextMenu).searchDishesList;
}
export default ContextMenu;
