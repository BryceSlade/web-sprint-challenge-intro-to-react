import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
     .then(response => {
       setCharacters(response.data);

     }).catch(error => {
       console.error(error);
     })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
        characters.map(items => {
          return <Character key = {items.id} info = {items}/>
        })
      }
    </div>
  );
}

export default App;