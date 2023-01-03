import React from 'react';
import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/movie/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}



