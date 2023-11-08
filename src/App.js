import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";


import Login from "./login"; 
import Response from "./response"; 

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/response/:id" element={<Response />} />
      </Routes>
    </Router>
  );
}

export default App;