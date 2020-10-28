import React, { useState, useEffect } from 'react'
import { getCharacters } from './api'
import './App.css'
import CharacterList from './Components/CharacterList'
import Filters from './Components/Filters'
import Header from './Components/Header'
import Pagination from "react-js-pagination"
import styled from 'styled-components'
import { FilterContext } from './Contexts/FilterContext'
import Error from './Components/Error'

const WrappPagination = styled.div`
  display: flex;
  padding: 30px;
  .pagination {
    margin: auto;
  }
  .pagination>li>a, .pagination>li>span {
    color:  #5bd8ca;
  }
  .pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
    color:  #5bd8ca;
    background-color: #FAFD7CFF;
    border-color: #FAFD7CFF;
  }
`
const App = () => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState()
  const [error, setError] = useState(false)
  const [activePage, setActivePage] = useState(1)
  const [filter, setFilter] = useState({
    status: '',
    species: '',
    gender: ''
  })
  useEffect(() => {
    getCharacters(activePage, filter)
      .then(res => {
        setInfo(res.data.info)
        setCharacters(res.data.results)
      }).catch(e => {
        console.log(e)
        setError(true)
      })
  }, [activePage, filter])

  return (
    <div className="App">
      <Header />
      <FilterContext.Provider value={{ filter, setFilter }}>
        {!error &&
          <>
            <Filters />
            {characters && characters.length &&
              <>
                <CharacterList characters={characters} />
                <WrappPagination>
                  <Pagination
                    activePage={activePage}
                    itemsCountPerPage={20}
                    totalItemsCount={info.count}
                    pageRangeDisplayed={5}
                    onChange={(page) => setActivePage(page)}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </WrappPagination>
              </>
            }
          </>
        }
        {error &&
          <Error />
        }
      </FilterContext.Provider>

    </div>
  )
}

export default App
