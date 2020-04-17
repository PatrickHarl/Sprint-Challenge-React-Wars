import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const url = 'https://swapi.py4e.com/api/people'
  const [characterData, setCharacterData] = useState([])
  


  


 useEffect(() => {

  axios.get(url)
        .then(res => {

          setCharacterData(res.data.results)
          
          

        })
        .catch(err => {


          console.log("There was an error retrieving the data.")


        })
    

  }, [])

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {

      characterData.map((char) => {return <Character char={char} />})
      
      }
    </div>
  );
}

export default App;
