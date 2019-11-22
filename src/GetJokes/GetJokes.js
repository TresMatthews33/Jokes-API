import React, { Component } from 'react'
import axios from 'axios';

class GetJokes extends Component {

    constructor(props) {
        super(props);
        this.state = { jokes: [] }
    }

    GetRandomJoke = () => {


        axios({
            method: "GET",
            url: "https://official-joke-api.appspot.com/random_joke"
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    GetTenRandomJokes = () => {


        axios({
            method: "GET",
            url: "https://official-joke-api.appspot.com/random_ten"
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {

        this.GetRandomJoke();

        return (
            <div>

            </div>
        );
    }
}





export default GetJokes;