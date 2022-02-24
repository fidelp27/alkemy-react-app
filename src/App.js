import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './componentes/header/header';
import ItemListContainer from './componentes/items/ItemListContainer';
import Login from './componentes/form/login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='*' element={<Login />} />
          
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
