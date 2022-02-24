import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: black;

  .logo {
    width: 100px;
    height: 100px;
  }
`;
export const StyledMenuBox = styled.div`
  margin: 0;
  padding: 0;
  margin-right: 3rem;
  .menu-img {
    width: 48px;
    height: 48px;
  }
  span {
    color: #fff;
    background-color: #39e820;
    border-radius: 1rem;
    padding: 0.3rem;
    margin: 0.5rem;
  }
`;
