import styled from "styled-components";

export const WrapperCards = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  text-align: center;
  height: 460px;
  width: 300px;
  margin: 2rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;
export const Title = styled.h3`
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: bolder;
  margin: 0.5rem;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 200px;
`;
export const InfoTitle = styled.p`
  height: 50px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 0.3rem;
  padding: 0;
  display: flex;
  align-items: center;
`;
export const Info = styled(InfoTitle)`
  font-size: 1rem;
  height: 30px;
`;
export const InfoData = styled(InfoTitle)`
  font-size: 1rem;
  color: tomato;
  font-weight: bolder;
`;
export const AddButton = styled.button`
  position: absolute;
  width: 100%;
  padding: 0.6rem;
  background-color: #1fda49;
  border-radius: 0 0 0.5rem 0.5rem;
  border: none;
  bottom: 0;
  color: white;
  font-weight: bolder;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #198d32;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;
