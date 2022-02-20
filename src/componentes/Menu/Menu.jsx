import React, { useEffect } from "react";
import {
  useMenu,
  useDeleteDish,
  useTotalPrice,
  useAverageHeatlh,
  useAverageTime,
} from "../../context/ContextMenu";
import { WrapperCards } from "../items/ItemStyled";
import { CardMenu, Data } from "../Menu/MenuStyled";

const Menu = () => {
  const menu = useMenu();
  const deleteDish = useDeleteDish();
  const totalPrice = useTotalPrice();
  const averageHealth = useAverageHeatlh();
  const averageTime = useAverageTime();

  return (
    <>
      <WrapperCards
        style={{
          position: "sticky",
          height: "35vh",
          backgroundColor: "#67eb46",
          margin: "0",
          zIndex: "1",
          top: "0",
        }}
      >
        {React.Children.toArray(
          menu?.map((elem) => {
            return (
              <CardMenu>
                <img src={elem.image} alt={elem.title} />
                <p>{elem.title} </p>
                <button onClick={() => deleteDish(elem)}>Eliminar</button>
              </CardMenu>
            );
          })
        )}
        <Data>
          <p>Total Price: {totalPrice.toFixed(2)} </p>
          <p>Average Preparation Time: {averageTime.toFixed(2)} </p>
          <p>Averge Health Score: {averageHealth.toFixed(2)} </p>
        </Data>
      </WrapperCards>
    </>
  );
};

export default Menu;
