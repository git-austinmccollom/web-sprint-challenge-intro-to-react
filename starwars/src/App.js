import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  console.log(characters);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
        debugger
      })
  }, []);


  return (
    <div className="App">
      <h1 className="Header">characters</h1>
      {
        characters.map( ch => {
          return <Character key={ch.id} character={ch}/>
        })
      }
    </div>
  );
}

export default App;
