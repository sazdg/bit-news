import { Component } from "react";

class Price extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            nome: "Bitcoin",
            prezzo: null,
            cambiamento: null

        };
    }

    componentDidMount(){
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true")
        .then(res => res.json())
        .then(
            (result) => {
                var x = result.bitcoin.usd_24h_change;
                //pprecisione del float, 3 numeri dopo la virgola
                let change = (x).toFixed(2);
                this.setState({
                    isLoaded: true,
                    prezzo: result.bitcoin.usd,
                    cambiamento: change
                });
            },
            //it's important to handle errors here
            //instead of a catch() block so that we don't swallow
            //exceptions rom actual bugs in components
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){
        
        const { error, isLoaded, nome, prezzo, cambiamento } = this.state;
        
        if(error){
            return <div>Error: {error.message}</div>;
        } else if(!isLoaded){
            console.log("stll loading..." + nome);
            return <div>Loading...</div>;
        } else {
            console.log(nome);
            return (
                <div>
                    <h3>{nome}</h3>
                    <p>Real time usdt price:<br/> {prezzo}$</p>
                    <p>24H change:<br/> {cambiamento}%</p>
                </div>
            );
        }
    }
}

export default Price;