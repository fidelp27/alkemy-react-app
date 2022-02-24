import styled from "styled-components";

export const CardMenu = styled.div`
  position: relative;
  margin: 1rem;
  height: 210px;
  width: 150px;
  text-align: center;
  border: 2px solid black;
  border-radius: 0.5rem;

  img {
    border-radius: 0.5rem;
    width: 130px;
    height: 130px;
    padding-top: 0.4rem;
  }
  img {
  }
  p {
    max-width: 200px;
    font-size: 0.6rem;
    letter-spacing: 1px;
    font-weight: bolder;
    padding: 0.1rem;
  }
  button {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.5rem;
    color: #fff;
    letter-spacing: 2px;
    background-color: crimson;
    border: none;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    transition: all.5s ease;
    &:hover {
      cursor: pointer;
      background-color: #6ff567;
    }
  }
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  height: 200;
  background-color: black;

  p {
    width: 100%;
    padding: 0.5rem;
    text-align: start;
    font-weight: bolder;
    color: #fff;
  }
`;
