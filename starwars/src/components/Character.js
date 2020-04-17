// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    display:flex;
    justify-content: space-evenly;
    align-content: center;

`

const CharacterContainer = styled.div`

    border: 1px dashed navajowhite;
    margin: 2% 0;
    box-shadow: 5px 5px 10px blanchedalmond;
    width:60%;
    background-color:rgb(255,235,205, 0.5);
    
`

const CharacterName = styled.h1`


    font-family: 'Ubuntu', sans-serif;
    text-decoration: underline;


`

const CharacterStats = styled.p`

    font-family: 'Ubuntu', sans-serif;

`

function Character(props) {

    if (!props.char)
    {

            return <h3>Loading...</h3>

    }
    else{
    
    return(

    <Container>   
        <CharacterContainer>

            <CharacterName>{props.char.name}</CharacterName>
            <CharacterStats>Height: {props.char.height}</CharacterStats>
            <CharacterStats>Mass: {props.char.mass}</CharacterStats>
            <CharacterStats>Birth Year: {props.char.birth_year}</CharacterStats>

        </CharacterContainer>
    </Container> 

    )
    }

}

export default Character;