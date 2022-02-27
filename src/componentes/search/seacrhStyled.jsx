import styled from "styled-components";
import { Form, Field } from "formik";

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchStyled = styled(Field)`
  width: 200px;
  text-align: center;
  padding: 1rem;
  border: none;
  letter-spacing: 1px;
  border-radius: 1rem;
  font-size: 0.6rem;
  @media (min-width: 600px) {
    width: 300px;
    font-size: 1rem;
  }
`;
export const ImgStyled = styled.img`
  color: #fff;
  position: absolute;
  left: 10px;
  @media (min-width: 600px) {
    left: 30px;
  }
`;
