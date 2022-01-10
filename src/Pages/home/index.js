import { useState } from "react";
import {Link} from "wouter";


const POPULAR_GIFS = ["Matrix", "Programming", "Panda", "bull terrier"]


export default function Home() {

    const [keyword, setkeyword] = useState('')

    const handleSubmit = (e) => {
        //navegar a otra ruta
        e.preventDefault()
        console.log(keyword)
    }
    const handleChange = (e) => {
        setkeyword(e.target.value)
    }


    return (
        <>
            <h3>Gifs mas buscados</h3>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
            type='text'
            value={keyword}
            placeholder="Buscar Gif..."/>
        </form>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif)=> (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`} >Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}