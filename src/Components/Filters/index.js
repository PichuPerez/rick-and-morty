import React, { useContext } from 'react'
import styled from 'styled-components'
import FilterGroup from './FilterGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FilterContext } from '../../Contexts/FilterContext'

const Main = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    @media only screen and (max-width: 1000px) {
       flex-direction: column;
    }
`
const Clear = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
`
const ClearButton = styled.div`
    color: #FAFD7CFF;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
    }
`
const Filters = () => {
    const { setFilter } = useContext(FilterContext)

    return (
        <Main>
            <FilterGroup
                groupName='Status'
                param='status'
                options={['Alive', 'Dead', 'Unknown']}
            />
            <FilterGroup
                groupName='Gender'
                param='gender'
                options={['Male', 'Female', 'Genderless', 'Unknown']}
            />
            <FilterGroup
                groupName='Species'
                param='species'
                options={['Human', 'Alien', 'Unknown']}
            />
            <Clear>
                <div>
                    Clear filters
                </div>
                <ClearButton onClick={() => setFilter({
                    status: '',
                    species: '',
                    gender: ''
                })}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </ClearButton>
            </Clear>
        </Main >
    )
}

export default Filters
