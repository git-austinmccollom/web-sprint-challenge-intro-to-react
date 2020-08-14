import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const {character} = props;

    const StyledCharacter = styled.div `
        display: flex;
        background: black;
        color: white;
        margin-bottom: 12px;
        border-radius: 10px;
        box-sizing: border-box;
        img{
            overflow: hidden;
            object-fit: cover;
        }
        .infoBox{
            display: flex;
            flex-direction: column;
            justify-content: left;
            padding: 1%;
            text-align: left;
        }

    `

    return(
        <StyledCharacter>
            <img src={character.image} />
            <div className='infoBox'>
                <h2>{character.name}</h2>
                <h4>{character.status} - {character.species}</h4>
                <h4>Last seen:<br/>{character.location.name}</h4>
                <h4>Origin:<br/>{character.origin.name}</h4>
            </div>
        </StyledCharacter>
        
    )
}