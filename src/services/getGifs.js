import axios from 'axios'
 
export const getGifs = async ( {keyword} ) => {

    const ApyKey = 'ypKCXe1Tme0yWmLGNEbfitQhQvJh33Ls'
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${ApyKey}&q=${keyword}&limit=10`

    const resp = await axios (URL)
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