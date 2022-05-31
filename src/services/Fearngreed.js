import { Component } from "react";
import "../App.css";

class Fearngreed extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            value: null,
            value_classification: null,
            timestamp: null,
            update: null
        };
    }

    componentDidMount(){
        fetch("https://api.alternative.me/fng/?date_format=world")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    value: result.data[0].value,
                    value_classification: result.data[0].value_classification,
                    timestamp: result.data[0].timestamp,
                    update: result.data[0].time_until_update
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

    render(){
        const { error, isLoaded, value, value_classification, update } = this.state;

        if(error){
            return <p>Error {error.message}</p>
        } else if (!isLoaded){
            return <p>Loading Fear and greed index...</p>
        } else {
            return (
                <div>
                    <h3>Bitcoin fear and greed index</h3>
                    <p>Value:<br/>{value}</p>
                    <p>{value_classification}</p>
                    <span>Next update: {update}</span>
                </div>
            );
        }
    }
}

export default Fearngreed;