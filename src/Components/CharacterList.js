import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33%);
    justify-items: center;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 50%);
      }
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 100%);
      }
`
const CharacterList = ({ characters }) => {
    return (
        <Main>
            {
                characters.map(character => {
                    return (
                        <CharacterCard character={character} />
                    )
                })
            }
        </Main>
    )
}

export default CharacterList
