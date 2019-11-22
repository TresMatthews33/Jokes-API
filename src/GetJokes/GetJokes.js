import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header/Header';

class GetJokes extends Component {

    constructor(props) {
        super(props);
        this.state = { jokes: [] }
    }

    GetRandomJoke = () => {

        const _this = this;

        axios({
            method: "GET",
            url: "https://official-joke-api.appspot.com/jokes/programming/random"
        })
        .then(function(response){
            _this.setState({ jokes: response.data.jokes || [] });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    GetTenRandomJokes = () => {

        const _this = this;

        axios({
            method: "GET",
            url: "https://official-joke-api.appspot.com/jokes/programming/ten"
        })
        .then(function(response){
            _this.setState({ jokes: response.data.jokes || [] });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {

        this.GetRandomJoke();

        return (
            <div>
                <Header 
                randomJokeHandler={this.GetRandomJoke}
                randomTenJokesHandler={this.GetTenRandomJokes}
                />
            </div>
        );
    }
}





export default GetJokes;