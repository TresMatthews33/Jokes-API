import React from 'react';
import './App.css';
import GetJokes from './GetJokes/GetJokes';


function App() {
  return ( 
    <div>
      <GetJokes />

      <div id="header">
        <h1>Making people cry since 2019!</h1>
      </div>

      <h1 id="welcome">Welcome to the JOKE MACHINE!</h1>

    <h2 id="looking">Looking for a good hearty laugh? Then click on one of the buttons below!</h2>

      <button id="onejoke" on click="GetRandomJoke()">Click me for 1 joke!</button>

      <button id="tenjokes">Click me if you need a laughter overdose!</button>
    </div>
  );
}

export default App;
