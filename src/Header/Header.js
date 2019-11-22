import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <p>Get Random Joke</p>
                <button onClick={() => this.props.randomRecipeHandler()}>Submit</button>;

                <p>Get 10 Random Jokes</p>
                <button onClick={() => this.props.randomRecipeHandler()}>Submit</button>
            </div>
        );
    }
};


export default Header;