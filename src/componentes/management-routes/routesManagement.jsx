import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/header";
import ItemListContainer from "../items/ItemListContainer";
import Login from "../form/login";

const RoutesManagement = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutesManagement;
