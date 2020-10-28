import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api/'

// Get Characters
export const getCharacters = (page, filter) => {
    let queryString = []
    for (const property in filter) {
        if (filter[property] !== "") {
            queryString.push(`${property}=${filter[property]}`)
        }
    }
    const query = queryString.join('&')
    let res
    if (query && query.length > 0) {
        res = axios.get(`${baseUrl}/character?page=${page}&${query}`)
    } else {
        res = axios.get(`${baseUrl}/character?page=${page}`)
    }
    return res
}
