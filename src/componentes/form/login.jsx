import React, { useEffect, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth, useSetAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledP,
} from "./StyledLogin";

const Login = () => {
  const [completeLogin, setCompleteLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const auth = useAuth();
  const setAuth = useSetAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    setCompleteLogin(true);
    axios
      .post("http://challenge-react.alkemy.org/", {
        email: email,
        password: password,
      })
      .then(function (response) {
        setTimeout(() => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("auth", true);

          setToken(localStorage.getItem("token"));
        }, 1000);
        navigate("/");
      })
      .catch((err) => {
        if (email !== "challenge@alkemy.org" || password !== "react") {
          setTimeout(
            () =>
              Swal.fire(
                "Email or Password is wrong",
                "Please enter a correct email and password",
                "warning"
              ),
            500
          );
        }
      });
    setTimeout(() => setCompleteLogin(false), 1500);
  };

  useEffect(() => {
    if (token) {
      setAuth(localStorage.getItem("auth"));
    } else {
      setAuth(localStorage.getItem("auth"));
    }
  }, [token, auth, setAuth]);

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const form_errors = {};
          if (!values.email) {
            form_errors.email =
              "This field can't be empty, please write your email address";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            form_errors.email =
              "The email address only accept letters, numbers, point, n-dash and underscore";
          } else if (values.email === "challenge@alkemy.org") {
            setEmail(values.email);
          }

          if (!values.password) {
            form_errors.password =
              "This field can't be empty, please write your password";
          } else if (values.password === "react") {
            setPassword(values.password);
          }
          return form_errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          handleLogin();
        }}
      >
        {({ errors }) => (
          <StyledFormContainer>
            <StyledForm action="" className="formulario">
              <StyledInputContainer>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                />
                <ErrorMessage
                  name="email"
                  component={() => <StyledP>{errors.email} </StyledP>}
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <StyledLabel htmlFor="password"> Password</StyledLabel>
                <StyledInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component={() => <StyledP>{errors.password} </StyledP>}
                />
              </StyledInputContainer>
              <StyledButton type="submit">Send</StyledButton>
              {completeLogin && (
                <img
                  src="https://media.giphy.com/media/QpClM4sgUDXoZKExzj/giphy.gif"
                  alt="loader"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                  }}
                />
              )}
            </StyledForm>
          </StyledFormContainer>
        )}
      </Formik>
    </>
  );
};
export default Login;
