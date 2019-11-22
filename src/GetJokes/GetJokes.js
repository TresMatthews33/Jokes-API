import React, { Component } from 'react'
import axios from 'axios';
import JokeList from '../JokeList/JokeList';
import Header from '../Header/Header';

class GetJokes extends Component {

    constructor(props) {
        super(props);
        this.state = { jokes: [] }
    }

    componentDidMount() {
        this.GetRandomJoke();
    }

    GetRandomJoke = () => {

        const _this = this;

        axios({
            method: "GET",
            url: "https://official-joke-api.appspot.com/jokes/programming/random"
        })
        .then(function(response){
            console.log(response.data);
            _this.setState({ jokes: response.data || [] });
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
            _this.setState({ jokes: response.data || [] });
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    
    render() {
        return (
            <div>
                <Header 
                randomJokeHandler={this.GetRandomJoke}
                randomTenJokesHandler={this.GetTenRandomJokes}
                
                />

                <JokeList jokes={this.state.jokes} />

            </div>
        );
    }
}





export default GetJokes;