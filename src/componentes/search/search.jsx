import React from "react";
import { Formik } from "formik";
import { useSearchDishesList } from "../../context/ContextMenu";
import Swal from "sweetalert2";
import { FormStyled, ImgStyled, SearchStyled } from "./seacrhStyled";

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
            Swal.fire("Write 2 or more letters");
          }
          resetForm();
        }}
      >
        {({ errors }) => (
          <FormStyled>
            <SearchStyled
              type="text"
              name="searchDish"
              id="searchDish"
              placeholder="Search a dish"
            />
            <ImgStyled src="https://i.imgur.com/P0Uas0u.png" alt="lupa" />
          </FormStyled>
        )}
      </Formik>
    </>
  );
};
export default Search;
