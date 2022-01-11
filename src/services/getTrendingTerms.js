import axios from 'axios'
import { API_URL, API_KEY } from './setting'
 
export const getTrendingTerms = async () => {

    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
    const resp = await axios (apiURL)
    const {data} = resp.data    
    return data
}