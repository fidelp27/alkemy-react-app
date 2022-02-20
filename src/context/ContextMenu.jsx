import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";

const ContextMenu = React.createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [counterDishes, setCounterDishes] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [averageTime, setAverageTime] = useState(0);
  const [averageHealth, setAverageHealth] = useState(0);
  const [totalMenu, setTotalMenu] = useState(0);

  const isOnMenu = (item) => {
    return menu?.findIndex((dish) => dish.id === item.id);
  };

  const addToMenu = (item) => {
    setTotalMenu(totalMenu + 1);

    if (isOnMenu(item) === -1 && totalMenu <= 3) {
      setMenu([item, ...menu]);
      total_price(item);
      average_time(item);
      average_health(item);
    }
    if (counterDishes < 4) {
      setCounterDishes(counterDishes + 1);
    }
    errors(item);
  };

  const deleteDish = (item) => {
    setMenu(menu?.filter((elem) => elem.id !== item.id));
    setCounterDishes(counterDishes - 1);
    setTotalPrice(totalPrice - item.pricePerServing);
    setAverageHealth(
      (averageHealth * counterDishes - item.healthScore) / (counterDishes - 1)
    );
    setAverageTime(
      averageTime * counterDishes - item.readyInMinutes / (counterDishes - 1)
    );
  };

  const total_price = (item) => {
    let total = 0;
    menu?.map((e) => (total += e.pricePerServing));
    total += item.pricePerServing;
    setTotalPrice(total);
  };

  const average_time = (item) => {
    let total = 0;
    menu?.map((e) => (total += e.readyInMinutes));
    total += item.readyInMinutes;
    setAverageTime(total / (counterDishes + 1));
  };

  const average_health = (item) => {
    let total = 0;
    menu?.map((e) => (total += e.healthScore));
    total += item.healthScore;
    total = total / (counterDishes + 1);
    setAverageHealth(total);
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
  return (
    <ContextMenu.Provider
      value={{
        menu,
        counterDishes,
        addToMenu,
        deleteDish,
        totalPrice,
        averageHealth,
        averageTime,
      }}
    >
      {children}
    </ContextMenu.Provider>
  );
}

export function useMenu() {
  return useContext(ContextMenu).menu;
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
export function useTotalPrice() {
  return useContext(ContextMenu).totalPrice;
}
export function useAverageTime() {
  return useContext(ContextMenu).averageTime;
}
export function useAverageHeatlh() {
  return useContext(ContextMenu).averageHealth;
}
export default ContextMenu;
