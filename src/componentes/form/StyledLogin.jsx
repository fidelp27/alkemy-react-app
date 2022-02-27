import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  margin: 0 auto;
  padding: 3rem;
  text-align: left;
  background-color: #23ad355c;
  border-radius: 1rem;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: none;
`;

export const StyledLabel = styled.label`
  width: 100%;
  color: #fff;
  font-weight: bolder;
  letter-spacing: 1px;
  margin: 0.5rem;
  text-align: left;
`;
export const StyledInput = styled(Field)`
  width: 100%;
  padding: 1rem;
  border: none;
  text-align: center;
  border-radius: 1rem;
  letter-spacing: 1px;
`;

export const StyledP = styled.p`
  padding: 0.2rem;
  color: red;
  font-size: 0.7rem;
  letter-spacing: 1px;
  font-weight: bolder;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: none;
  color: #fff;
  background-color: #0aad25a4;
  &:hover {
    cursor: pointer;
    background-color: #0aad25e1;
  }
`;
