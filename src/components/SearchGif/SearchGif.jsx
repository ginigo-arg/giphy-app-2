import React, {useState} from "react"
import {useLocation} from "wouter";
  
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
        <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
            type='text'
            value={keyword}
            placeholder="Buscar Gif..."/>
            <button>Buscar</button>
        </form>
        </div>
    )
}


