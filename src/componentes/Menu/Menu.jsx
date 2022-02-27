import React from "react";
import { useMenu, useDeleteDish } from "../../context/ContextMenu";
import { WrapperCards } from "../items/ItemStyled";
import { CardMenu } from "../Menu/MenuStyled";
import TotalMenu from "../totalMenu/totalMenu";

const Menu = () => {
  const menu = useMenu();
  const deleteDish = useDeleteDish();

  return (
    <>
      <WrapperCards
        style={{
          position: "sticky",
          height: "40vh",
          backgroundColor: "#67eb4667",
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
        <TotalMenu />
      </WrapperCards>
    </>
  );
};

export default Menu;
