import React, { useEffect, useState } from "react";
import { useMenu } from "../../context/ContextMenu";
import { Data } from "../Menu/MenuStyled";

const TotalMenu = () => {
  const menu = useMenu();
  const [totals, setTotals] = useState({
    price: 0,
    time: 0,
    healthScore: 0,
  });

  useEffect(() => {
    const calculatedTotal = menu.map((item) => ({
      price: item.pricePerServing * item.servings,
      time: item.readyInMinutes,
      healthScore: item.healthScore,
    }));

    const totalPrice = calculatedTotal.reduce(
      (sum, value) =>
        typeof value.price == "number" ? sum + value.price : sum,
      0
    );

    const totalTime = calculatedTotal.reduce(
      (sum, value) => (typeof value.time == "number" ? sum + value.time : sum),
      0
    );

    const totalHealthScore = calculatedTotal.reduce(
      (sum, value) =>
        typeof value.healthScore == "number" ? sum + value.healthScore : sum,
      0
    );

    setTotals({
      price: totalPrice.toFixed(2),
      time: (totalTime / menu.length).toFixed(2),
      healthScore: (totalHealthScore / menu.length).toFixed(2),
    });
  }, [menu]);

  return (
    <Data>
      <p>Total Price: ${totals.price} </p>
      <p>Average Preparation Time: {totals.time} </p>
      <p>Averge Health Score: {totals.healthScore} </p>
    </Data>
  );
};
export default TotalMenu;
