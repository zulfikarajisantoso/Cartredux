import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Edit from './admin/Edit';
import Homeadmin from './admin/Homeadmin';
import Footer from './components/Footer';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Registrasi from './components/Registrasi';

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Accept']= 'application/json'
axios.defaults.headers.post['Content-Type']= 'application/json'
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token? `Bearer ${token}` : ``;
  return config;
})


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/login" element= {localStorage.getItem('auth_token') ? <Navigate to="/"/> : <Login /> } />  
      <Route  path="/regis" element= {localStorage.getItem('auth_token') ? <Navigate to="/"/> : <Registrasi /> } />          y
      <Route path="/admin" element={<Homeadmin />} />
      <Route path="/admin/edit/:id" element={<Edit />} />

    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
