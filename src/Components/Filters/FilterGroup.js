import React, { useContext } from 'react'
import styled from 'styled-components'
import { FilterContext } from '../../Contexts/FilterContext'

const Main = styled.div`
    display: flex;
    margin-left: 20px;
    margin-bottom: 10px;
    flex-direction: column;
    justify-content: center;
`
const GroupName = styled.div`
    margin-right: 10px;
`
const FiltersWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
`
const Filter = styled.div`
    border: 2px solid #5bd8ca;
    color: ${props => props.isActive ? '#5bd8ca' : '#FAFD7CFF'};
    background-color: ${props => props.isActive ? '#FAFD7CFF' : 'none'};
    padding: 5px;
    text-align: center;
    &:hover{
        cursor: pointer;
    }
`
const FilterGroup = ({ groupName, options, param }) => {
    const { filter, setFilter } = useContext(FilterContext)

    const handleOptionClick = (option) => {
        const newFilter = { ...filter }
        newFilter[param] = option.toLowerCase()
        setFilter(newFilter)
    }

    return (
        <Main>
            <GroupName>{groupName}</GroupName>
            <FiltersWrap>
                {options.map(option => {
                    const isActive = filter[param] === option.toLowerCase()
                    return (
                        <Filter onClick={() => handleOptionClick(option)} isActive={isActive}>
                            {option}
                        </Filter>
                    )
                }
                )}
            </FiltersWrap>
        </Main>
    )
}

export default FilterGroup
