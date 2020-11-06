import React, { useState, useEffect } from 'react';
import Character from './components/characters';
import Buttons from './components/buttons';
import axios from 'axios';
import './app.css';



function App() {
  let [people, setPeople] = useState([]);

  const [nextPage, setNextPage] = useState('http://swapi.dev/api/people/?page=1');

  let [previousPage, setPrevious] = useState();

  const getCharacters = async (url) => {
  if (url) {
      const response = await axios(url);

      const { data: { next, previous, results } } = response
      setPeople(results);
      setNextPage(next);
      setPrevious(previous);
    }
  }
  
  return (
    <div className="characters">
      <Character results={people} />
      <Buttons next={nextPage} previous={previousPage} results={people} getChar={getCharacters} />

    </div>
  );
}

export default App;