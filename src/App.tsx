import React from "react";
import Header from "./Component/Header";
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Product from "./Component/Product";
import Details from "./Component/Details";
import CartPage from "./Component/CartPage";
import Dispatcher from "./Component/Dispatcher";


const App: React.FC = (): any => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/disptch" element={<Dispatcher />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
