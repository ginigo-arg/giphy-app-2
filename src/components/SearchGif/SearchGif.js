import React, {useState} from "react"
import {useLocation} from "wouter";
import './search.css'
  
export default function SearchGif () {
    
    const [path, pushLocation] = useLocation()
    const [keyword, setkeyword] = useState('')
    
const handleSubmit = (e) => {
    //navegar a otra ruta
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
    console.log(keyword)
    setkeyword('')
}
const handleChange = (e) => {
    setkeyword(e.target.value)
}


    return (
        
        <form onSubmit={handleSubmit} className="searchGifs">
            <input onChange={handleChange}
            type='text'
            value={keyword}
            placeholder="Buscar Gif..."
            className="search-input"/>
            <button className="search-btn">Buscar</button>
        </form>
        
    )
}


