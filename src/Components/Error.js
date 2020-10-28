import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
`
const ErrorImg = styled.img`
    width: 40%;
    margin: auto;
    margin-top: 10px;
    @media only screen and (max-width: 1000px) {
        width: 70%;
     }
`
const Error = () => {
    return (
        <Main>
            <div>Oooops..... there was an error, refresh the page and try again.</div>
            <ErrorImg src="https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Rick-and-Morty-2295450.jpg?r=1580841691301" />
        </Main>
    )
}

export default Error
