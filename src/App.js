import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Keranjang from './components/Keranjang';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/keranjang" element={<Keranjang />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
