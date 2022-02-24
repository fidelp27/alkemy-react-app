import React from "react";
import {
  CardContainer,
  CardImg,
  Title,
  InfoTitle,
  Info,
  InfoData,
  AddButton,
} from "./ItemStyled";
import { useAddToMenu } from "../../context/ContextMenu";

const Item = ({ item }) => {
  const addToMenu = useAddToMenu();
  const {
    id,
    image,
    title,
    pricePerServing,
    healthScore,
    vegan,
    readyInMinutes,
  } = item;

  return (
    <CardContainer>
      {vegan ? <Title>Vegan: Yes </Title> : <Title>Vegan: No </Title>}
      <CardImg src={image} alt={id} />
      <InfoTitle>{title}</InfoTitle>
      <Info>
        Price: <InfoData>${pricePerServing} </InfoData>
      </Info>
      <Info>
        Ready in: <InfoData>{readyInMinutes} minutes</InfoData>
      </Info>
      <Info>
        Healt Score: <InfoData>{healthScore}</InfoData>{" "}
      </Info>
      <AddButton onClick={() => addToMenu(item)}>Add to menu</AddButton>
    </CardContainer>
  );
};
export default Item;
