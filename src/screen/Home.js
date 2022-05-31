import React from "react";
import '../App.css';
import Price from "../services/Price.js";
import Trending from "../services/Trending.js";
import Fearngreed from "../services/Fearngreed.js";
import Reload from "../components/Reload.js";



function Home(){
    return(
        <div className="homepage">
            <Price />
            <Fearngreed />
            <Trending />
            <Reload />
        </div>
    );
}

export default Home;