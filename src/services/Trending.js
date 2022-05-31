import { Component } from "react";
import "../App.css";

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            nome: null,
            simbolo: null,
            foto: null,
            prezzo_btc: null
        };
    }

    componentDidMount() {

        fetch("https://api.coingecko.com/api/v3/search/trending")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        trending: result.coins
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
        const { error, isLoaded, trending } = this.state;
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading trending data...</p>
        } else {
            return (
                <div>
                    <h3>Trending last 24h</h3>
                    <span>Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)</span>

                    <table style={{width: '30%'}}>
                        <tr>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>ShortName</th>
                        </tr>
                        {trending.map(trending => (
                            <tr>
                                <td><img src={trending.item.thumb} alt={trending.item.name} /></td>
                                <td>{trending.item.name}</td>
                                <td>{trending.item.symbol}</td>
                            </tr>
                        ))}
                    </table>

                </div>
            );
        }
    }
}

export default Trending;