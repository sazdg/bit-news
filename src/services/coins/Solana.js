import { Component } from "react";
import "../../App.css";

class Solana extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            nome: "Solana",
            prezzo: null,
        };
    }

    componentDidMount() {

        fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        prezzo: result.solana.usd
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    render() {
        const { error, isLoaded, nome, prezzo } = this.state;
        if (error) {

            return <p>Error: {error.message}</p>

        } else if (!isLoaded) {

            return <p>Loading trending data...</p>

        } else {
            return (
                <div style={{ width: 'auto' }}>
                    <td>{nome}</td>
                    <td>{prezzo}$</td>
                </div>

            );
        }
    }
}

export default Solana;