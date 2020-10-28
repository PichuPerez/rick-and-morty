import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    text-align: center;
`

const Logo = styled.img`
    width: 50%;
    margin-top: -70px;
    @media only screen and (max-width: 1000px) {
        width: 60%;
        margin-top: -50px;
      }
    @media only screen and (max-width: 600px) {
        width: 80%;
        margin-top: -30px;
      }
`
const Header = () => {
    return (
        <Main>
            <Logo src={'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVK-867iNzC3GeSiDQJ7jasFpdN4ySy2Of17S2KxaxbOOtsqax_k_ldd_f5TiDeulU3_lyJmIjtBgPVKLnE1cUK-kRk9yZsO4MXA.png?r=47e'} />
        </Main>
    )
}

export default Header
