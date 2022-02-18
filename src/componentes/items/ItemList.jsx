import React from "react";
import Item from "./Item";
import { WrapperCards } from "./ItemStyled";

const ItemList = ({ dishes, addToMenu }) => {
  return (
    <WrapperCards>
      {React.Children.toArray(
        dishes?.map((elem) => {
          return <Item item={elem} addToMenu={addToMenu} />;
        })
      )}
    </WrapperCards>
  );
};
export default ItemList;
