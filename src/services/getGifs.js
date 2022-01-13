import axios from 'axios'
import { API_URL, API_KEY } from './setting'

 
export const getGifs = async ( {keyword = 'morty', limit=25, page=0}  = {} ) => {

    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`

    const resp = await axios (apiURL)
    const {data} = resp.data 
     
    const gifs = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url:item.images.downsized_medium.url
        }
    })
    return gifs
    
}