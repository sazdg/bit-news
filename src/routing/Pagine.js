import '../App.css'; 
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../screen/Home.js';
import Favcoins from '../screen/Favcoins.js';

const Pagine = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favcoins" element={<Favcoins />} />
    </Routes>
    );


export default Pagine;