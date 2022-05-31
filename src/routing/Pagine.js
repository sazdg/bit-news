import '../App.css'; 
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../screen/Home.js';
import Pagina2 from '../screen/Pagina2.js';

const Pagine = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pagina2" element={<Pagina2 />} />
    </Routes>
    );


export default Pagine;