import React from "react";
import { Formik, Form, Field } from "formik";
import { useSearchDishesList } from "../../context/ContextMenu";

const Search = () => {
  const searchDishesList = useSearchDishesList();
  return (
    <>
      <Formik
        initialValues={{ searchDish: "" }}
        onSubmit={(values, { resetForm }) => {
          if (values.searchDish.length >= 2) {
            let query = values.searchDish.toLowerCase();
            searchDishesList(query);
          } else {
            searchDishesList(null);
          }
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form>
            <Field
              type="text"
              name="searchDish"
              id="searchDish"
              placeholder="Ingresa un ingrediente"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Search;
