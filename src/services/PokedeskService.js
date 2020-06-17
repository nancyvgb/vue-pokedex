import axios from 'axios';

const apiClient = axios.create ({
    baseURL: 'https://pokeapi.co/api/v2',
    withCredentials: false,
    headers: {
        Accept: 'applicattion/json',
        'Content-Type': 'application/json'
    }
});



export default {
   // https://pokeapi.co/api/v2/pokemon?limit=10&offset=4

    getEvents(perPage, page) {
        let offset = page === 1 ? 0 : page*perPage
      return  apiClient.get('/pokemon?limit=' + perPage + '&offset=' + (offset)).then(response=>{
            const urls = response.data.results.map(element=>axios.get(element.url));
            return axios.all(urls)
        })
    } 
}