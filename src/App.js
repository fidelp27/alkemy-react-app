import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './componentes/header/header';
import ItemListContainer from './componentes/items/ItemListContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
