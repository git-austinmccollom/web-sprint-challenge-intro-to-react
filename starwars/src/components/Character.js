import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const {character} = props;

    return(
        <h2>{character.name}</h2>
    )
}