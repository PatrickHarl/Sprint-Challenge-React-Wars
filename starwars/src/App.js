import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const url = 'https://swapi.py4e.com/api/people'
  const [characterData, setCharacterData] = useState({})
  const [currentURL, setCurrentURL] = useState(url)
  

  const Buttons = styled.button`
  
  
    width:80px;
    height:25px;
    background-color:blanchedalmond;
    border-color:blanchedalmond;
    border-radius:5px;
    margin: 5px;

  
  
  `
  


 useEffect(() => {

  axios.get(currentURL)
        .then(res => {

          setCharacterData(res.data)
          

        })
        .catch(err => {


          console.log("There was an error retrieving the data.")


        })
    

  }, [currentURL])

  if (!characterData.results)
  {

    return <h3>Loading...</h3>

  }
  else {

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {

      characterData.results.map((char) => {return <Character char={char} />})
      
      }
      <Buttons onClick={() => {characterData.previous ? setCurrentURL(characterData.previous) : setCurrentURL(url)}}>Previous</Buttons>
      <Buttons onClick={() => {characterData.next ? setCurrentURL(characterData.next) : setCurrentURL(url)}}>Next</Buttons>

    </div>
  );
    }
}

export default App;
