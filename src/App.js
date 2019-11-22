import React from 'react';
import './App.css';
import GetJokes from './GetJokes/GetJokes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return ( 
    <div>
      <GetJokes />
    </div>

  )};

export default App;
