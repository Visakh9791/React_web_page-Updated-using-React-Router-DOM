
import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/home";
import About from "./Pages/about";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <h1 className="text-capitalize text-center text-danger mt-3 mb-5">Welcome to Coding World!</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </BrowserRouter>



  )

}



export default App;