import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [completeLogin, setCompleteLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setCompleteLogin(true);
    axios
      .post("http://challenge-react.alkemy.org/", {
        email: email,
        password: password,
      })
      .then(function (response) {
        setTimeout(() => console.log(response), 1900);
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
            1900
          );
        }
      });
    setTimeout(() => setCompleteLogin(false), 2000);
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const form_errors = {};
          if (!values.email) {
            form_errors.email = "Debes ingresar un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            form_errors.email =
              "El correo solo puede contener letras, números, puntos, guiones y guion bajo";
          } else if (values.email === "challenge@alkemy.org") {
            setEmail(values.email);
          }

          if (!values.password) {
            form_errors.password = "Debes ingresar un password";
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
          <>
            <Form action="" className="formulario">
              <div>
                <label htmlFor="email"></label> Email
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.7rem",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                    >
                      {errors.email}{" "}
                    </p>
                  )}
                />
              </div>
              <div>
                <label htmlFor="password"> Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.7rem",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                    >
                      {errors.password}{" "}
                    </p>
                  )}
                />
              </div>
              <button type="submit">Enviar</button>
              {completeLogin && (
                <img
                  src="../../assets/loading.gif"
                  alt="loader"
                  style={{ position: "absolute", top: "50px", left: "50px" }}
                />
              )}
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
export default Login;