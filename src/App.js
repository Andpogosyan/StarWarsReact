import React, {useState, useEffect}from 'react';
import Character from './components/characters';
import Buttons from './components/buttons';
import axios from 'axios';
import './app.css';
import ModalWindow from './components/modalWindow';



function App() {
  let [people, setPeople] = useState([]);

  const [nextPage, setNext] = useState('http://swapi.dev/api/people/?page=1');

  let [previousPage, setPrevious] = useState([]);

  const getCharacters = async () => {
    
    if(nextPage){ 

    const response = await axios(nextPage);
    
    const { data: { next, previous, results } } = response
    setPeople(results);
    setNext(next);
    setPrevious(previous);
  }
  }

  const previousCharacters = async () => {
    
    if(previousPage){
      const response = await axios(previousPage);
      
     const { data: { next, previous, results } } = response
     
      setPeople(results);
      setNext(next);
      setPrevious(previous);
    }
  };

  
  

  return (
    <div className="characters">
      <Character results={people}/>
      <Buttons next={nextPage} previous={previousPage} results={people} getChar={getCharacters} getBack={previousCharacters}/>
      
    </div>
  );
}

export default App;