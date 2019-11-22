import React, { Component } from 'react';

class JokeList extends Component {

    getListItems() {
        return this.props.jokes.map((joke) =>
            <li key={joke.id}>
                <h1>{joke.setup}</h1>
                <h1>{joke.punchline}</h1>
            </li>
        );
    }

    render() {
        return (
            <ul>{this.getListItems()}</ul>
        );
    }
}

export default JokeList;