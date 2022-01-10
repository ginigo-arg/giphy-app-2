import React, {useState, useEffect} from 'react'
import Gift from "./Gif"
import './Grid.css'
import { getGifs } from '../services/getGifs'

const GifGrid = ( {params} ) => {

    const {keyword} = params
    const [loading, setloading] = useState(false)
    //Hooks 
    const [grid, setgrid] = useState({
        data:[],
        load: true
    })
    useEffect(() => {
        setloading(true)
        getGifs({keyword}).then(gifs => {
            setgrid({
                data: gifs,
                load: false
            })
            setloading(false)
        })
        
    }, [keyword])

    if(loading) return <span>Cargando ⏰</span>

    return (
        <div className='GifGrid'>
            {
            grid.data.map(({url, title, id})=>{
                return <Gift 
                url={url} 
                title={title} 
                id={id}
                key={id}/>
            })
            }
        </div>
    )
    }

export default GifGrid