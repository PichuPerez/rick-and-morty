import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    color: black;
    box-shadow: 14px 14px 10px -7px #4CAF50;
    margin: 20px;
    &:hover{
        transform: translate3D(0,-1px,0) scale(1.08);
    }
`
const StyledImage = styled.img`
    height: 70%;
`
const Name = styled.h4`
    margin-top: 5px;
    margin-bottom: 5px;
`
const Detail = styled.div`
    display: flex;
    font-size: 16px;
    margin-left: 10px;
`
const Label = styled.span`
    font-weight: 900;
    text-decoration: underline;
    margin-right: 5px;
    margin-bottom: 5px;
`
const CharacterCard = ({ character }) => {

    let emoji
    switch (character.species) {
        case 'Human':
            emoji = '👤'
            break
        case 'Alien':
            emoji = '👽'
            break
        case 'unknown':
        default:
            emoji = '❓'
            break
    }




    return (
        <Card>
            <StyledImage src={character.image} />
            <Name>
                {character.name}
                {' '}
                {emoji}
            </Name>
            <Detail>
                <Label>
                    Status:
                </Label>
                {character.status}
            </Detail>
            <Detail>
                <Label>
                    Gender:
                </Label>
                {character.gender}
            </Detail>
            {character.type && character.type.length &&
                <Detail>
                    <Label>
                        Type:
                </Label>
                    {character.type}
                </Detail>
            }
        </Card>
    )
}

export default CharacterCard
