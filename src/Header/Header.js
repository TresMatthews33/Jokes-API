import React, { Component } from 'react';
import './Header.css'

class Header extends Component {



    render() {
        return (
            <div>
                <div id="header">
                    <h1>Making people cry since 2019!</h1>
                </div>

                <h1 id="welcome">Welcome to the JOKE MACHINE!</h1>

                <h2 id="looking">Looking for a good hearty laugh? Then click on one of the buttons below!</h2>
                
                <button id="onejoke" onClick={() => this.props.randomJokeHandler()}>Click me for a joke!</button>
            

                <button id="tenjokes" onClick={() => this.props.randomTenJokesHandler()}>Click me to overdose on laughs!</button>

                <img id="clown" src="../LaughTrack/Clown.jpg" alt="A Funny Clown"></img>;

            </div>
        );
    }
}

export default Header;