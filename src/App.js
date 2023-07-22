import React from "react";
import './App.css';
import { Login } from "./Login"; 
import { Register } from "./Register"; 
import Home from './Home' //local hosts reading this info from app.js to show definition
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (


    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;