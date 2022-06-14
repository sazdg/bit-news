import React from "react";
import '../App.css';
import Reload from "../components/Reload";
import Avalanche from "../services/coins/Avalanche";
import Polkadot from "../services/coins/Polkadot";
import Solana from "../services/coins/Solana";
import Dogecoin from "../services/coins/Dogecoin";

function Favcoins(){
    return(
        <div><br/>
            <table style={{width: '40%'}}>
                <tr>
                    <div>
                        <th>Name</th>
                        <th>Price</th>
                    </div>
                </tr>
                <tr>
                    <Polkadot />
                </tr>
                <tr>
                    <Solana />
                </tr>
                <tr>
                    <Avalanche />
                </tr>
                <tr>
                    <Dogecoin />
                </tr>
            </table>
            
        </div>
    );
}

export default Favcoins;