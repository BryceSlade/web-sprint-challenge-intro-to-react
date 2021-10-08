import React from 'react';
import styled from 'styled-components';

const CharacterStyle = styled.div `
    padding: 2rem;
    font-family: 'Gemunu Libre', sans-serif;
`;

const InfoStyle = styled.div`
    border: 2px dashed black;
    width: 20%;
    margin-left: 40%;
    font-size: 1.5rem;
`;

const NameStyle = styled.h2`
    font-size: 3rem;
`;

const ButtonStyle = styled.button`
    padding: 1%;
    font-family: 'Gemunu Libre', sans-serif;
    font-size: 2rem;
    margin-bottom: 2%;
    background-color: #EADDCA;
`;

export default function Character({info}) {

    const [show, setShow] = React.useState(false)

    return (
        <CharacterStyle>
            <NameStyle>{info.name}</NameStyle>
            <ButtonStyle onClick={() => setShow(!show)}>{show ? 'Hide Details' : 'Show Details'}</ButtonStyle>
            {show && 
            <div>
            <InfoStyle>
                <h3>Gender: {info.gender}</h3>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Birth Year: {info.birth_year}</h3>
                <h3>Eye Color: {info.eye_color}</h3>
                <h3>Hair Color: {info.hair_color}</h3>
                <h3>Skin Color: {info.skin_color}</h3>
            </InfoStyle>
            </div>}
        </CharacterStyle>
    )
}